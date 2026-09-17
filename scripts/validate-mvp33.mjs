import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const read = (relativePath) => readFileSync(resolve(root, relativePath), 'utf8');

// Feature: the independent site does not expose third-party image material examples.
const index = read('index.html');
const translations = read('js/main.js');

assert.doesNotMatch(index, /materials-section|assets\/image-materials/);
assert.doesNotMatch(translations, /materials\./);

// Feature: the remaining site still exposes the product and its bilingual homepage.
assert.match(index, /InspirationDraft/);
assert.match(translations, /灵感树洞/);

for (const relativePath of [
  'icons/app_icon.png',
]) {
  assert.ok(existsSync(resolve(root, relativePath)), `missing required asset: ${relativePath}`);
}

console.log('MVP33 BDD checks passed: third-party image material examples are removed and core bilingual branding remains.');
