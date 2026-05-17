#!/usr/bin/env node
import {mkdir, readFile, writeFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const skillRoot = path.resolve(__dirname, '..');
const referencesDir = path.join(skillRoot, 'references');
const componentsPath = path.join(referencesDir, 'components.json');
const polarisScript = 'https://cdn.shopify.com/shopifycloud/polaris.js';

const styleFields = [
  'display',
  'box-sizing',
  'width',
  'height',
  'min-width',
  'min-height',
  'padding-top',
  'padding-right',
  'padding-bottom',
  'padding-left',
  'margin-top',
  'margin-right',
  'margin-bottom',
  'margin-left',
  'border-top-width',
  'border-right-width',
  'border-bottom-width',
  'border-left-width',
  'border-top-style',
  'border-right-style',
  'border-bottom-style',
  'border-left-style',
  'border-top-color',
  'border-right-color',
  'border-bottom-color',
  'border-left-color',
  'border-radius',
  'border-start-start-radius',
  'border-start-end-radius',
  'border-end-start-radius',
  'border-end-end-radius',
  'box-shadow',
  'background-color',
  'color',
  'font-family',
  'font-size',
  'font-weight',
  'line-height',
  'letter-spacing',
  'text-align',
  'gap',
  'row-gap',
  'column-gap',
  'opacity',
  'cursor',
  'outline-color',
  'outline-style',
  'outline-width',
  'outline-offset',
  'transition-duration',
  'transition-property',
  'transform',
];

const args = new Map();
for (let i = 2; i < process.argv.length; i += 1) {
  if (process.argv[i].startsWith('--')) {
    const key = process.argv[i].slice(2);
    const next = process.argv[i + 1];
    if (!next || next.startsWith('--')) {
      args.set(key, true);
    } else {
      args.set(key, next);
      i += 1;
    }
  }
}

function fixtureFor(component, state) {
  const attrs = new Map();
  const label = component.name;

  if (state === 'disabled') attrs.set('disabled', '');
  if (state === 'loading') attrs.set('loading', '');
  if (state === 'invalid') attrs.set('error', 'Required');
  if (state === 'selected') {
    attrs.set('selected', '');
    attrs.set('checked', '');
  }
  if (state === 'variant-primary') attrs.set('variant', 'primary');
  if (state === 'variant-secondary') attrs.set('variant', 'secondary');
  if (state === 'variant-tertiary') attrs.set('variant', 'tertiary');
  if (state === 'tone-info') attrs.set('tone', 'info');
  if (state === 'tone-critical') attrs.set('tone', 'critical');
  if (state === 'tone-success') attrs.set('tone', 'success');
  if (state === 'tone-warning') attrs.set('tone', 'warning');
  if (state === 'tone-caution') attrs.set('tone', 'caution');
  if (state === 'tone-neutral') attrs.set('tone', 'neutral');

  if (component.slug === 'table' && state.startsWith('paginate')) {
    attrs.set('paginate', '');
    if (['paginate-next', 'paginate-both'].includes(state)) attrs.set('hasNextPage', '');
    if (['paginate-previous', 'paginate-both'].includes(state)) attrs.set('hasPreviousPage', '');
  }

  if (component.slug === 'banner') {
    attrs.set('heading', `${label} heading`);
  }

  if (component.slug.includes('field') || ['select', 'checkbox', 'switch', 'text-area'].includes(component.slug)) {
    attrs.set('label', label);
  }

  if (component.slug === 'image' || component.slug === 'thumbnail' || component.slug === 'avatar') {
    attrs.set('src', 'https://cdn.shopify.com/shopifycloud/web/assets/v1/vite/client/en/assets/shopify_glyph-CP0sn9hU.svg');
    attrs.set('alt', label);
  }

  const attrString = [...attrs.entries()]
    .map(([key, value]) => (value === '' ? key : `${key}="${String(value).replace(/"/g, '&quot;')}"`))
    .join(' ');

  const children = childMarkup(component);
  return `<${component.element} data-measure="target" ${attrString}>${children}</${component.element}>`;
}

function childMarkup(component) {
  if (component.slug === 'banner') {
    return 'Banner message body';
  }
  if (component.slug === 'select') {
    return '<s-option value="one">One</s-option><s-option value="two">Two</s-option>';
  }
  if (component.slug === 'choice-list') {
    return '<s-choice value="one">One</s-choice><s-choice value="two">Two</s-choice>';
  }
  if (component.slug === 'table') {
    return '<s-table-header-row><s-table-header listSlot="primary">Date issued</s-table-header><s-table-header>Bill number</s-table-header><s-table-header>Bill type</s-table-header><s-table-header>Payment status</s-table-header><s-table-header format="numeric">Amount</s-table-header></s-table-header-row><s-table-body><s-table-row><s-table-cell>21 Apr 2026</s-table-cell><s-table-cell>#519670225</s-table-cell><s-table-cell>Billing cycle</s-table-cell><s-table-cell><s-badge tone="success">Paid</s-badge></s-table-cell><s-table-cell>$0.00</s-table-cell></s-table-row></s-table-body>';
  }
  if (component.slug === 'button-group') {
    return '<s-button>Cancel</s-button><s-button variant="primary">Save</s-button>';
  }
  if (component.slug === 'stack' || component.slug === 'grid' || component.slug === 'box' || component.slug === 'section') {
    return '<s-text>Example content</s-text><s-button>Action</s-button>';
  }
  if (component.slug === 'modal' || component.slug === 'popover' || component.slug === 'tooltip') {
    return '<s-button>Open</s-button><s-text>Example content</s-text>';
  }
  if (component.slug.includes('list')) {
    return '<s-list-item>First item</s-list-item><s-list-item>Second item</s-list-item>';
  }
  return component.name;
}

function pageHtml(component, state) {
  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="shopify-api-key" content="test">
    <script src="${polarisScript}"></script>
    <style>
      body {
        margin: 32px;
        font-family: Inter, system-ui, sans-serif;
      }
    </style>
  </head>
  <body>${fixtureFor(component, state)}</body>
</html>`;
}

async function fetchMarkdown(component) {
  const url = `${component.docs}.md`;
  const response = await fetch(url);
  if (!response.ok) return '';
  return response.text();
}

function extractDocSections(markdown) {
  if (!markdown) return {properties: 'Not captured.', slots: 'Not captured.', events: 'Not captured.'};

  const wanted = ['properties', 'slots', 'events'];
  const sections = Object.fromEntries(wanted.map((name) => [name, 'Not listed in captured docs.']));
  const lines = markdown.split(/\r?\n/);

  for (let index = 0; index < lines.length; index += 1) {
    const heading = lines[index].match(/^#{2,3}\s+(.+)$/);
    if (!heading) continue;

    const key = heading[1].trim().toLowerCase();
    if (!wanted.includes(key)) continue;

    const content = [];
    for (let next = index + 1; next < lines.length; next += 1) {
      if (/^#{2,3}\s+/.test(lines[next])) break;
      content.push(lines[next]);
    }
    const raw = content.join('\n').trim();
    sections[key] = compactDocList(key, raw) || 'Not listed in captured docs.';
  }

  return sections;
}

function compactDocList(kind, raw) {
  if (!raw) return '';
  const entries = [];
  const lines = raw.split(/\r?\n/);
  let current = null;

  for (const line of lines) {
    const item = line.match(/^\*\s+\*\*([^*]+)\*\*$/);
    if (item) {
      if (current) entries.push(current);
      current = {name: item[1], body: []};
      continue;
    }
    if (current) current.body.push(line);
  }
  if (current) entries.push(current);

  if (entries.length === 0) return raw;

  if (kind === 'properties') {
    const rows = entries.map((entry) => {
      const body = entry.body.join('\n').trim();
      const bold = [...body.matchAll(/\*\*([\s\S]*?)\*\*/g)].map((match) => match[1].replace(/\s+/g, ' ').trim());
      const type = summarizeType(bold[0] || 'unknown');
      const defaultValue = (bold.find((value) => value.startsWith('Default:')) || '').replace(/^Default:\s*/, '') || 'none listed';
      const required = bold.includes('required') ? 'yes' : 'not specified';
      const notes = summarizeNotes(body);
      return `| \`${entry.name}\` | ${escapeCell(type)} | ${escapeCell(defaultValue)} | ${required} | ${escapeCell(notes)} |`;
    });

    return `| Property | Type | Default | Required | Notes |
| --- | --- | --- | --- | --- |
${rows.join('\n')}`;
  }

  const label = kind === 'events' ? 'Event' : 'Slot';
  const rows = entries.map((entry) => {
    const body = entry.body.join('\n').trim();
    const bold = [...body.matchAll(/\*\*([\s\S]*?)\*\*/g)].map((match) => match[1].replace(/\s+/g, ' ').trim());
    const type = summarizeType(bold[0] || 'unknown');
    return `| \`${entry.name}\` | ${escapeCell(type)} | ${escapeCell(summarizeNotes(body))} |`;
  });

  return `| ${label} | Type | Notes |
| --- | --- | --- |
${rows.join('\n')}`;
}

function summarizeType(type) {
  if (type.length <= 160) return type;
  if (type.includes('|')) {
    const options = type.split('|').map((value) => value.trim()).filter(Boolean);
    return `${options.length} allowed string values; see Shopify docs for the exhaustive union.`;
  }
  return `${type.slice(0, 140)}...`;
}

function summarizeNotes(body) {
  const cleaned = body
    .replace(/\*\*[\s\S]*?\*\*/g, '')
    .replace(/```[\s\S]*?```/g, '')
    .split(/\r?\n/)
    .map((line) => line.replace(/^\s*\*\s*/, '').trim())
    .filter(Boolean)
    .filter((line) => !line.startsWith('Default:'))
    .join(' ');

  if (!cleaned) return 'No notes listed.';
  return cleaned.length > 220 ? `${cleaned.slice(0, 217)}...` : cleaned;
}

function escapeCell(value) {
  return String(value).replace(/\|/g, '\\|').replace(/\n/g, ' ');
}

function stylesToMarkdown(measured) {
  return measured
    .map(({state, host, inner, hostRect, innerRect, shadowNodes, notes}) => {
      const hostRows = styleFields.map((field) => `| ${field} | ${host[field] ?? 'unmeasured'} |`).join('\n');
      const innerRows = inner
        ? styleFields.map((field) => `| ${field} | ${inner[field] ?? 'unmeasured'} |`).join('\n')
        : '| shadow/internal node | unavailable |';
      const shadowRows = shadowNodes.length > 0
        ? shadowNodes
            .map((node, index) => `| ${index + 1} | ${node.tag} | ${escapeCell(node.part || '')} | ${escapeCell(node.className || '')} | \`${JSON.stringify(node.rect)}\` | ${escapeCell(node.backgroundColor)} | ${escapeCell(node.color)} | ${escapeCell(node.borderRadius)} | ${escapeCell(node.boxShadow)} | ${escapeCell(node.fontWeight)} |`)
            .join('\n')
        : '| - | unavailable |  |  |  |  |  |  |  |  |';
      const noteBlock = notes.length > 0 ? `\nNotes: ${notes.join(' ')}` : '';

      return `### ${state}
${noteBlock}

Host rect: ${hostRect ? `\`${JSON.stringify(hostRect)}\`` : '`unmeasured`'}  
First visible shadow/control rect: ${innerRect ? `\`${JSON.stringify(innerRect)}\`` : '`unavailable`'}

Host:

| Property | Value |
| --- | --- |
${hostRows}

First visible shadow/control node:

| Property | Value |
| --- | --- |
${innerRows}

Visible shadow node inventory:

| # | Tag | Part | Class | Rect | Background | Color | Radius | Shadow | Weight |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
${shadowRows}`;
    })
    .join('\n\n');
}

function buildReference(component, docSections, measured, capture) {
  const today = new Date().toISOString().slice(0, 10);
  return `# ${component.name}

Element: \`${component.element}\`  
Docs: ${component.docs}  
Captured: ${today}  
Polaris source: ${polarisScript}

## Capture Environment

| Field | Value |
| --- | --- |
| Browser | ${capture.browserName} |
| Viewport | ${capture.viewport.width}x${capture.viewport.height} |
| States | ${capture.states.map((state) => `\`${state}\``).join(', ')} |
| Component definition | ${capture.definitionStatus} |

## Use

Use the native \`${component.element}\` component before creating custom Shopify-admin-looking UI.

## Native Examples

\`\`\`tsx
${fixtureFor(component, 'default')}
\`\`\`

## Properties

${docSections.properties}

## Slots

${docSections.slots}

## Events

${docSections.events}

## Measured Styles

${stylesToMarkdown(measured)}

## Wrapper Guidance

- Reuse an existing shared wrapper if the app has one.
- Keep new wrappers thin and delegate visual behavior to \`${component.element}\`.
- Map product semantics to Polaris attributes in one place.
- Avoid hard-coded padding, radius, shadow, border, background, text, and hover values unless the measured table is being used for a custom composition.

## Avoid

- Do not imitate this component with ad hoc CSS when the native element is available.
- Do not duplicate this styling in feature files.
- Do not claim exact values that are not present in this reference or freshly measured.
`;
}

async function measureComponent(browser, component, states) {
  const viewport = {width: 1024, height: 768};
  const page = await browser.newPage({viewport});
  const measured = [];
  let definitionStatus = 'unknown';

  for (const state of states) {
    await page.setContent(pageHtml(component, state), {waitUntil: 'networkidle'});
    definitionStatus = await page
      .evaluate((elementName) => {
        if (!window.customElements) return 'customElements unavailable';
        return window.customElements
          .whenDefined(elementName)
          .then(() => 'defined')
          .catch((error) => `definition failed: ${error.message}`);
      }, component.element)
      .catch((error) => `definition wait failed: ${error.message}`);
    await page.waitForTimeout(350);

    const target = page.locator('[data-measure="target"]').first();
    if (state === 'hover') await target.hover().catch(() => {});
    if (state === 'focus-visible') await target.focus().catch(() => {});
    if (state === 'active') {
      await target.hover().catch(() => {});
      await page.mouse.down().catch(() => {});
      await page.waitForTimeout(100);
    }

    const result = await target.evaluate((element, fields) => {
      function readStyles(node) {
        const styles = getComputedStyle(node);
        return Object.fromEntries(fields.map((field) => [field, styles.getPropertyValue(field)]));
      }

      function firstVisibleShadowNode(host) {
        if (!host.shadowRoot) return null;
        const preferred = host.shadowRoot.querySelector('button, a, input, select, textarea, [role="button"], [tabindex]');
        if (preferred) return preferred;
        const walker = document.createTreeWalker(host.shadowRoot, NodeFilter.SHOW_ELEMENT);
        let node = walker.nextNode();
        while (node) {
          const rect = node.getBoundingClientRect();
          const styles = getComputedStyle(node);
          if (rect.width > 0 && rect.height > 0 && styles.visibility !== 'hidden' && styles.display !== 'none') {
            return node;
          }
          node = walker.nextNode();
        }
        return null;
      }

      function visibleShadowNodes(host) {
        if (!host.shadowRoot) return [];
        const nodes = [];
        const walker = document.createTreeWalker(host.shadowRoot, NodeFilter.SHOW_ELEMENT);
        let node = walker.nextNode();
        while (node && nodes.length < 16) {
          const rect = node.getBoundingClientRect();
          const styles = getComputedStyle(node);
          if (rect.width > 0 && rect.height > 0 && styles.visibility !== 'hidden' && styles.display !== 'none') {
            nodes.push({
              tag: node.tagName.toLowerCase(),
              part: node.getAttribute('part') || '',
              className: typeof node.className === 'string' ? node.className : '',
              rect: rectFor(node),
              backgroundColor: styles.getPropertyValue('background-color'),
              color: styles.getPropertyValue('color'),
              borderRadius: styles.getPropertyValue('border-radius'),
              boxShadow: styles.getPropertyValue('box-shadow'),
              fontWeight: styles.getPropertyValue('font-weight'),
            });
          }
          node = walker.nextNode();
        }
        return nodes;
      }

      function rectFor(node) {
        if (!node) return null;
        const rect = node.getBoundingClientRect();
        return {
          x: Math.round(rect.x * 100) / 100,
          y: Math.round(rect.y * 100) / 100,
          width: Math.round(rect.width * 100) / 100,
          height: Math.round(rect.height * 100) / 100,
        };
      }

      const inner = firstVisibleShadowNode(element);
      return {
        host: readStyles(element),
        inner: inner ? readStyles(inner) : null,
        hostRect: rectFor(element),
        innerRect: rectFor(inner),
        shadowNodes: visibleShadowNodes(element),
        notes: [
          element.shadowRoot ? 'Open shadow root inspected.' : 'No open shadow root available; host styles only.',
          inner ? `Measured internal ${inner.tagName.toLowerCase()} node.` : 'No visible internal node measured.',
        ],
      };
    }, styleFields);

    measured.push({state, ...result});
    if (state === 'active') await page.mouse.up().catch(() => {});
  }

  await page.close();
  return {
    measured,
    capture: {
      browserName: browser.browserType().name(),
      viewport,
      states,
      definitionStatus,
    },
  };
}

async function main() {
  const {chromium} = await import('playwright').catch(() => {
    throw new Error('Playwright is required. Install it in the repo that runs this script, then retry.');
  });

  const components = JSON.parse(await readFile(componentsPath, 'utf8'));
  const selected = args.get('component')
    ? components.filter((component) => component.slug === args.get('component') || component.element === args.get('component'))
    : components;

  if (selected.length === 0) {
    throw new Error(`No component matched ${args.get('component')}`);
  }

  const states = (args.get('states') || 'default,hover,active,focus-visible,disabled,loading,selected,invalid,variant-primary,variant-secondary,variant-tertiary,tone-info,tone-success,tone-warning,tone-caution,tone-critical,tone-neutral')
    .split(',')
    .map((state) => state.trim())
    .filter(Boolean);

  const browser = await chromium.launch();
  try {
    for (const component of selected) {
      const markdown = await fetchMarkdown(component).catch(() => '');
      const docSections = extractDocSections(markdown);
      const {measured, capture} = await measureComponent(browser, component, states);
      const outDir = path.join(referencesDir, component.category);
      await mkdir(outDir, {recursive: true});
      await writeFile(path.join(outDir, `${component.slug}.md`), buildReference(component, docSections, measured, capture));
      console.log(`Wrote references/${component.category}/${component.slug}.md`);
    }
  } finally {
    await browser.close();
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
