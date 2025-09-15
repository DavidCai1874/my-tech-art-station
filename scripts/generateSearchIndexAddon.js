import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'src/pages/05_Addons');
const output = [];

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

      // get relative path from project root
      let relativePath = fullPath.replace(process.cwd(), '').replace(/\\/g, '/');

      // format path: replace /src/pages/05_Addons/ with addons/
      let formattedPath = relativePath.replace(/^\/?src\/pages\/05_Addons\//, 'addons/');

      // extract tool name (maya, blender, etc.)
      const toolMatch = formattedPath.match(/^addons\/([^/]+)\/mds\//i);
      const tool = toolMatch ? toolMatch[1].toLowerCase() : "";

      // replace everything between addons/ and the filename with tool name
      formattedPath = formattedPath.replace(
        /^addons\/[^/]+\/mds\/[^/]+\/([^/]+)\.md$/,
        `addons/${tool}/$1`
      );

      // remove .md extension if still present
      formattedPath = formattedPath.replace(/\.md$/, '');

      // get id from filename (without extension, uppercased)
      let id = path.basename(file, '.md').toUpperCase();

      output.push({
        title: title,
        path: formattedPath,
        id: id
      });
    }
  });
}

walk(contentDir);

fs.writeFileSync('./public/searchIndexAddon.json', JSON.stringify(output, null, 2));
console.log('searchIndexAddon.json generated!');