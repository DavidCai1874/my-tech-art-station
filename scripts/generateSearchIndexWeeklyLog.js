import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'src/pages/08_WeeklyLog');
const output = [];

function formatWeeklyLogPath(relativePath) {
  let p = relativePath;

  // 替换 WeeklyLog 路径前缀
  p = p.replace(/^\/src\/pages\/08_WeeklyLog\/Era\//i, '/weeklylog/');

  // 去掉 /mds/
  p = p.replace(/\/mds\//gi, '/');

  // 把 2025_06Summer -> 2025-06summer
  p = p.replace(/\/([^/]+)/g, (match, folder) => {
    return '/' + folder.replace(/_/g, '-').toLowerCase();
  });

  return p;
}

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
      relativePath = relativePath.replace('.md', '');

      // deal with WeeklyLog
      if (relativePath.includes('/src/pages/08_WeeklyLog/Era/')) {
        relativePath = formatWeeklyLogPath(relativePath);
      }

      output.push({
        title: title,
        path: relativePath,
      });
    }
  });
}

walk(contentDir);

fs.writeFileSync('./public/searchIndexWeeklyLog.json', JSON.stringify(output, null, 2));
console.log('searchIndexWeeklyLog.json generated!');