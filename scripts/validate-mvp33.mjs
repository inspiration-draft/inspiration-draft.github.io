import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const read = (relativePath) => readFileSync(resolve(root, relativePath), 'utf8');

// Feature: the independent site exposes the current image-material workflow.
const index = read('index.html');
const translations = read('js/main.js');

assert.match(index, /assets\/image-materials\/duolingo-luckin-original\.jpg/);
assert.match(index, /assets\/image-materials\/duolingo-luckin-sticker\.png/);
assert.match(index, /data-i18n="materials\.title"/);
assert.match(index, /data-i18n="materials\.sticker"/);

// Feature: both locales describe the same user-visible capability.
assert.match(translations, /Keep the source, shape the idea/);
assert.match(translations, /保留原始素材，再塑造想法/);
assert.match(translations, /Derived subject sticker/);
assert.match(translations, /派生主体贴纸/);

for (const relativePath of [
  'icons/app_icon.png',
  'assets/image-materials/duolingo-luckin-original.jpg',
  'assets/image-materials/duolingo-luckin-sticker.png',
  'assets/branding/inspirationdraft-mvp33-branding-en.jpg',
  'assets/branding/inspirationdraft-mvp33-branding-zh.jpg',
  'appstore/inspirationdraft-fancy-screenshots/output/en/iphone-6.9-01.png',
  'appstore/inspirationdraft-fancy-screenshots/output/zh-Hans/iphone-6.9-01.png',
]) {
  assert.ok(existsSync(resolve(root, relativePath)), `missing required asset: ${relativePath}`);
}

console.log('MVP33 BDD checks passed: current branding, image materials, bilingual copy, and screenshot entrypoints are present.');
