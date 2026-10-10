// Construye una versión con rutas relativas para previsualizarla como página estática (Artifact).
import { execSync } from 'node:child_process';
import { readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';

const out = 'dist-preview';
execSync(`npx astro build --outDir ${out}`, { stdio: 'inherit', env: { ...process.env, BUILD_FORMAT: 'file' } });

const pages = readdirSync(out, { recursive: true }).filter((f) => f.endsWith('.html') && f !== 'page.html');
// '/es/bayer' → 'es/bayer.html'; '/' → 'index.html'; '/es/' → 'es.html' o 'es/index.html'
const target = (path) => {
  const p = path.replace(/\/$/, '');
  if (p === '') return 'index.html';
  if (existsSync(`${out}/${p}.html`)) return `${p}.html`;
  if (existsSync(`${out}/${p}/index.html`)) return `${p}/index.html`;
  return p;
};
for (const f of pages) {
  const prefix = '../'.repeat(f.split('/').length - 1) || './';
  let html = readFileSync(`${out}/${f}`, 'utf8');
  html = html.replace(/(href|src)="\/([^"#]*)(#[^"]*)?"/g, (_, attr, path, hash = '') => `${attr}="${prefix}${target(path)}${hash}"`);
  writeFileSync(`${out}/${f}`, html);
}

// Copia de la portada sin el esqueleto <html>/<head>/<body> para el visor de Artifacts.
const index = readFileSync(`${out}/index.html`, 'utf8')
  .replace(/<!doctype html>/i, '')
  .replace(/<\/?html[^>]*>|<\/?head>|<\/?body>/g, '');
writeFileSync(`${out}/page.html`, index);
