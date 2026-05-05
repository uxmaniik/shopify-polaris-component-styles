#!/usr/bin/env node
import {access, readFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const skillRoot = path.resolve(__dirname, '..');

const requiredFiles = [
  'SKILL.md',
  'agents/openai.yaml',
  'references/index.md',
  'references/components.json',
  'references/component-reference-format.md',
  'references/implementation-rules.md',
  'references/page-layout-checklist.md',
  'references/pattern-selection.md',
  'references/style-capture-schema.md',
  'references/verification-checklist.md',
  'scripts/update-component-index.mjs',
  'scripts/extract-component-styles.mjs',
];

function fail(message) {
  console.error(`validate-skill: ${message}`);
  process.exitCode = 1;
}

async function exists(relativePath) {
  try {
    await access(path.join(skillRoot, relativePath));
    return true;
  } catch {
    return false;
  }
}

function parseFrontmatter(markdown) {
  const match = markdown.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) return null;

  const data = {};
  for (const line of match[1].split('\n')) {
    const field = line.match(/^([a-zA-Z0-9_-]+):\s*(.*)$/);
    if (field) data[field[1]] = field[2].trim();
  }
  return data;
}

async function main() {
  for (const file of requiredFiles) {
    if (!(await exists(file))) fail(`missing ${file}`);
  }

  const skill = await readFile(path.join(skillRoot, 'SKILL.md'), 'utf8');
  const frontmatter = parseFrontmatter(skill);
  if (!frontmatter) fail('SKILL.md is missing YAML frontmatter');
  if (frontmatter?.name !== 'shopify-polaris-component-styles') fail('SKILL.md frontmatter name is incorrect');
  if (!frontmatter?.description || frontmatter.description.length < 120) fail('SKILL.md description is too short to trigger reliably');
  if (/\[TODO\]|TODO/.test(skill)) fail('SKILL.md still contains TODO text');

  const components = JSON.parse(await readFile(path.join(skillRoot, 'references/components.json'), 'utf8'));
  if (!Array.isArray(components) || components.length < 40) fail('components.json should include the full Shopify web components index');
  for (const component of components) {
    for (const key of ['category', 'name', 'slug', 'element', 'docs']) {
      if (!component[key]) fail(`component entry missing ${key}: ${JSON.stringify(component)}`);
    }
    if (!component.element.startsWith('s-')) fail(`component element should start with s-: ${component.element}`);
    if (!component.docs.startsWith('https://shopify.dev/docs/api/app-home/web-components/')) {
      fail(`component docs URL is outside Shopify App Home web components: ${component.docs}`);
    }
  }

  const index = await readFile(path.join(skillRoot, 'references/index.md'), 'utf8');
  for (const component of components) {
    if (!index.includes(`\`${component.element}\``)) fail(`index.md missing ${component.element}`);
    if (!index.includes(component.docs)) fail(`index.md missing ${component.docs}`);
  }

  const metadata = await readFile(path.join(skillRoot, 'agents/openai.yaml'), 'utf8');
  if (!metadata.includes('display_name:')) fail('agents/openai.yaml missing display_name');
  if (!metadata.includes('$shopify-polaris-component-styles')) fail('agents/openai.yaml default_prompt should mention $shopify-polaris-component-styles');

  if (process.exitCode) process.exit(process.exitCode);
  console.log(`Skill validation passed (${components.length} components).`);
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exit(1);
});
