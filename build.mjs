// node build.mjs — renders src/pages/*.mjs into static HTML (one folder per page)
import fs from 'node:fs';
const pages = { home: 'index.html', features: 'features/index.html', blog: 'blog/index.html', docs: 'docs/index.html', about: 'about/index.html', pricing: 'pricing/index.html' };
for (const [name, out] of Object.entries(pages)) {
  const src = new URL(`./src/pages/${name}.mjs`, import.meta.url);
  if (!fs.existsSync(src)) continue;
  const mod = await import(src.href + '?t=' + Date.now());
  fs.mkdirSync(new URL('.', new URL(out, import.meta.url)), { recursive: true });
  fs.writeFileSync(new URL(out, import.meta.url), mod.default());
  console.log('built', out);
}
