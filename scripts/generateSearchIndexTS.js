import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// set the directory to src/pages/06_TroubleShooting
const contentDir = path.join(process.cwd(), 'src/pages/05_TroubleShooting');
const output = [];

// format path for TroubleShooting markdown files
function formatTSPath(relativePath) {
  let p = relativePath;
  // remove /src/pages/06_TroubleShooting
  p = p.replace(/^\/?src\/pages\/06_TroubleShooting\//i, 'troubleshooting/');
  // remove /mds/
  p = p.replace(/\/mds\//gi, '/');
  // all to lowercase
  p = p.toLowerCase();
  // remove .md extension
  p = p.replace(/\.md$/, '');
  return p;
}

// get id from filename (last part, uppercased)
function getIdFromPath(formattedPath) {
  const parts = formattedPath.split('/');
  const last = parts[parts.length - 1];
  return last.toUpperCase();
}

// recursively walk through all files in the directory
function walk(dir) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walk(fullPath);
    } else if (file.endsWith('.md')) {
      const fileContent = fs.readFileSync(fullPath, 'utf-8');
      const { data } = matter(fileContent);

      let title = data.title;
      if (!title) {
        const match = fileContent.match(/^#\s+(.+)$/m);
        if (match) {
          title = match[1].trim();
        } else {
          title = file.replace('.md', '');
        }
      }

      let relativePath = fullPath.replace(process.cwd(), '').replace(/\\/g, '/');
      let formattedPath = formatTSPath(relativePath);
      let id = getIdFromPath(formattedPath);

      output.push({
        title: title,
        path: formattedPath,
        id: id
      });
    }
  });
}

walk(contentDir);

fs.writeFileSync('./public/searchIndexTS.json', JSON.stringify(output, null, 2));
console.log('searchIndexTS.json generated!');