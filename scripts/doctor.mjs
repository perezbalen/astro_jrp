#!/usr/bin/env node

import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const requiredFiles = [
  'astro.config.mjs',
  'package.json',
  'pnpm-lock.yaml',
  'src/config.ts',
  'src/content.config.ts',
  'src/content/.obsidian',
  '.github/workflows/deploy.yml',
];
const collections = ['posts', 'pages', 'projects', 'docs', 'special'];
const failures = [];
const warnings = [];

for (const relativePath of requiredFiles) {
  if (!existsSync(join(projectRoot, relativePath))) failures.push(`Missing ${relativePath}`);
}

const nodeMajor = Number.parseInt(process.versions.node.split('.')[0], 10);
if (nodeMajor < 22 || nodeMajor >= 27) {
  failures.push(`Node ${process.versions.node} is outside the supported range (22-26).`);
} else if (nodeMajor !== 22) {
  warnings.push(`Node ${process.versions.node} works, but Node 22 is used in deployment and is preferred locally.`);
}

if (existsSync(join(projectRoot, 'package-lock.json'))) {
  warnings.push('package-lock.json is present; pnpm-lock.yaml is the authoritative lockfile.');
}

let totalContent = 0;
const inventory = [];
for (const collection of collections) {
  const collectionPath = join(projectRoot, 'src', 'content', collection);
  if (!existsSync(collectionPath)) {
    inventory.push(`${collection}=0`);
    continue;
  }

  const countMarkdown = (directory) => readdirSync(directory, { withFileTypes: true }).reduce(
    (count, entry) => count + (entry.isDirectory()
      ? countMarkdown(join(directory, entry.name))
      : /\.mdx?$/i.test(entry.name) ? 1 : 0),
    0,
  );
  const count = countMarkdown(collectionPath);
  totalContent += count;
  inventory.push(`${collection}=${count}`);
}

if (existsSync(join(projectRoot, 'src', 'config.ts'))) {
  const config = readFileSync(join(projectRoot, 'src', 'config.ts'), 'utf8');
  const site = config.match(/\bsite:\s*["']([^"']+)["']/)?.[1] ?? 'unknown';
  const platformMatches = [...config.matchAll(/\bplatform:\s*["']([^"']+)["']/g)];
  const platform = platformMatches.at(-1)?.[1] ?? 'unknown';
  console.log(`Site: ${site}`);
  console.log(`Deployment: ${platform}`);
}

console.log(`Content: ${inventory.join(', ')} (${totalContent} total)`);
for (const warning of warnings) console.warn(`Warning: ${warning}`);

if (failures.length > 0) {
  for (const failure of failures) console.error(`Error: ${failure}`);
  process.exitCode = 1;
} else {
  console.log('Project structure is ready.');
}
