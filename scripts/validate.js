import { readFileSync } from 'node:fs';
for (const file of ['index.html', 'src/main.js', 'src/styles.css']) {
  const content = readFileSync(file, 'utf8');
  if (!content.trim()) throw new Error(`${file} is empty`);
}
console.log('Static app files validated.');
