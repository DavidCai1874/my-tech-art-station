import fs from "fs";
import path from "path";

// define the root directories to process
const roots = [
  path.join(process.cwd(), "src/pages/04_Addons"),
  path.join(process.cwd(), "src/pages/05_TroubleShooting"),
  path.join(process.cwd(), "src/pages/06_WeeklyLog")
];

// recursively find all markdown files in a directory
function findMarkdownFiles(dir) {
  let results = [];
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      results = results.concat(findMarkdownFiles(fullPath));
    } else if (file.endsWith(".md")) {
      results.push(fullPath);
    }
  });
  return results;
}

// format markdown content: escape list items and numbered lists
function formatMarkdown(filePath) {
  let content = fs.readFileSync(filePath, "utf-8");
  // escape - list items
  content = content.replace(/^-\s(?!\\-)(.*)$/gm, "- \\-$1");
  // escape numbered lists, but only if the rest of the line does NOT contain \.
  content = content.replace(/^(\d+)\.\s(.*)$/gm, (match, num, text) => {
    if (/\\\./.test(text)) return match; // if already has \. after, skip
    return `${num}\\. ${text}`;
  });
  fs.writeFileSync(filePath, content, "utf-8");
  console.log(`Formatted: ${filePath}`);
}
// process all markdown files in the specified roots
roots.forEach(root => {
  const files = findMarkdownFiles(root);
  files.forEach(formatMarkdown);
});

console.log("All markdown files formatted!");