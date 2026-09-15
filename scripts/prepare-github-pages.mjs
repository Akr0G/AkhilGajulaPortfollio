import { mkdir, readdir, readFile, rename, writeFile } from 'node:fs/promises';
import { join, parse } from 'node:path';

const output = join(process.cwd(), 'dist', 'client');
const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];
if (!repository) throw new Error('GITHUB_REPOSITORY is required to prepare a GitHub Pages build.');

const prefix = `/${repository}`;
const work = join(output, 'work');

for (const entry of await readdir(work, { withFileTypes: true })) {
  if (!entry.isFile() || !['.html', '.rsc'].includes(parse(entry.name).ext)) continue;
  const { name, ext } = parse(entry.name);
  const projectDirectory = join(work, name);
  await mkdir(projectDirectory, { recursive: true });
  await rename(join(work, entry.name), join(projectDirectory, `index${ext}`));
}

async function rewritePaths(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const filePath = join(directory, entry.name);
    if (entry.isDirectory()) {
      await rewritePaths(filePath);
      continue;
    }
    if (!['.html', '.rsc', '.js', '.css', '.json'].includes(parse(entry.name).ext)) continue;
    const source = await readFile(filePath, 'utf8');
    const rewritten = source
      .replaceAll('"/_next/', `"${prefix}/_next/`)
      .replaceAll('"/akhil-gajula-profile.png', `"${prefix}/akhil-gajula-profile.png`)
      .replaceAll('"/nurses-of-the-future-recognition.png', `"${prefix}/nurses-of-the-future-recognition.png`)
      .replaceAll('"/favicon.svg', `"${prefix}/favicon.svg`)
      .replaceAll('"/work/', `"${prefix}/work/`)
      .replaceAll('"/#', `"${prefix}/#`)
      .replaceAll('href="/"', `href="${prefix}/"`)
      .replaceAll('"href":"/"', `"href":"${prefix}/"`);
    if (rewritten !== source) await writeFile(filePath, rewritten);
  }
}

await rewritePaths(output);
await writeFile(join(output, '.nojekyll'), '');
