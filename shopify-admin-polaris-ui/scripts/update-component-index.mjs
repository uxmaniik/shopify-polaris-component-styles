#!/usr/bin/env node
import {mkdir, readFile, writeFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const skillRoot = path.resolve(__dirname, '..');
const referencesDir = path.join(skillRoot, 'references');
const sourceUrl = 'https://shopify.dev/docs/api/app-home/web-components.md';

const args = new Map();
for (let i = 2; i < process.argv.length; i += 1) {
  if (process.argv[i].startsWith('--')) {
    args.set(process.argv[i].slice(2), process.argv[i + 1]);
    i += 1;
  }
}

const inputPath = args.get('input');

function titleCaseFromSlug(slug) {
  return slug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function elementFromSlug(slug) {
  return `s-${slug}`;
}

function parseComponents(markdown) {
  const components = [];
  let categoryTitle = '';
  let categorySlug = '';
  const lines = markdown.split(/\r?\n/);
  const linkRe =
    /^\[([^\]]+)\]\(https:\/\/shopify\.dev\/docs\/api\/app-home\/web-components\/([^/)]+)\/([^/)]+)\)$/;

  for (const line of lines) {
    const heading = line.match(/^##\s+(.+)$/);
    if (heading && heading[1] !== 'Available components') {
      categoryTitle = heading[1].trim();
      categorySlug = categoryTitle.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      continue;
    }

    const match = line.match(linkRe);
    if (!match || !categorySlug) continue;

    const [, name, category, slug] = match;
    const expectedName = titleCaseFromSlug(slug);
    if (name.toLowerCase() !== expectedName.toLowerCase()) continue;

    components.push({
      category,
      categoryTitle,
      name,
      slug,
      element: elementFromSlug(slug),
      docs: `https://shopify.dev/docs/api/app-home/web-components/${category}/${slug}`,
    });
  }

  const seen = new Set();
  return components.filter((component) => {
    const key = `${component.category}/${component.slug}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function formatHeading(title) {
  return title
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

function buildIndex(components) {
  const today = new Date().toISOString().slice(0, 10);
  const grouped = new Map();
  for (const component of components) {
    if (!grouped.has(component.categoryTitle)) grouped.set(component.categoryTitle, []);
    grouped.get(component.categoryTitle).push(component);
  }

  const sections = [];
  for (const [categoryTitle, categoryComponents] of grouped) {
    const rows = categoryComponents
      .map((component) => {
        const local = `references/${component.category}/${component.slug}.md`;
        return `| ${component.name} | \`${component.element}\` | ${component.docs} | \`${local}\` |`;
      })
      .join('\n');

    sections.push(`## ${formatHeading(categoryTitle)}

| Component | Element | Shopify docs | Local reference |
| --- | --- | --- | --- |
${rows}`);
  }

  return `# Polaris Web Components Index

Source: https://shopify.dev/docs/api/app-home/web-components
Markdown source: ${sourceUrl}
Last generated: ${today}

Use this file as the navigation map. Open the component-specific reference when it exists. If it does not exist, run \`scripts/extract-component-styles.mjs --component <slug>\` to generate one from the current Shopify docs and rendered Polaris component.

${sections.join('\n\n')}
`;
}

async function main() {
  const markdown = inputPath
    ? await readFile(path.resolve(inputPath), 'utf8')
    : await fetch(sourceUrl).then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch ${sourceUrl}: ${response.status} ${response.statusText}`);
        }
        return response.text();
      });

  const components = parseComponents(markdown);
  if (components.length === 0) {
    throw new Error('No components found. Shopify docs structure may have changed.');
  }

  await mkdir(referencesDir, {recursive: true});
  await writeFile(path.join(referencesDir, 'components.json'), `${JSON.stringify(components, null, 2)}\n`);
  await writeFile(path.join(referencesDir, 'index.md'), buildIndex(components));

  console.log(`Updated ${components.length} components in references/index.md and references/components.json`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
