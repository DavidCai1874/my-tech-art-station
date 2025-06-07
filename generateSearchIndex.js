// generateSearchIndex.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'; // 读取md文件中的frontmatter

const contentDirs = [
  path.join(process.cwd(), 'src/pages/05_Addons'),
  path.join(process.cwd(), 'src/pages/06_TroubleShooting'),
  path.join(process.cwd(), 'src/pages/08_WeeklyLog'),
];
const output = [];

function walk(dir) 
{
  const files = fs.readdirSync(dir);
  files.forEach((file) => 
  {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) 
    {
      walk(fullPath);
    } 
    else if (file.endsWith('.md')) 
    {
      const fileContent = fs.readFileSync(fullPath, 'utf-8');
      const { data } = matter(fileContent);
      const title = data.title || file.replace('.md', '');
      // 生成相对路径
      const relativePath = fullPath.replace(process.cwd(), '').replace(/\\/g, '/');
      output.push
      ({
        title: title,
        path: relativePath.replace('.md', ''),
      });
    }
  });
}

// 遍历所有目录
contentDirs.forEach(walk);

fs.writeFileSync('./public/searchIndex.json', JSON.stringify(output, null, 2));
console.log('✅ searchIndex.json generated!');