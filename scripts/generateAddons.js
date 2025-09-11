import fs from "fs";
import path from "path";

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const tools = ["Maya", "Blender", "Others"];

const ROOT = path.join(process.cwd(), "src/pages/05_Addons");

tools.forEach(folder => {
  const mdsRoot = path.join(ROOT, folder, "mds");
  const outputFile = path.join(ROOT, folder, `Addon_${capitalize(folder)}.js`);

  if (!fs.existsSync(mdsRoot)) {
    console.warn(`Skipping ${folder} folder: no mds directory.`);
    return;
  }

  const importLines = [];
  const entries = [];

  function walk(dir) {
    fs.readdirSync(dir).forEach(file => {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        walk(fullPath);
      } else if (file.endsWith(".md")) {
        const varName = file.replace(/\.md$/, "").replace(/[^a-zA-Z0-9_]/g, "_");
        const relPath = './mds/' + path.relative(mdsRoot, fullPath).replace(/\\/g, '/');
        importLines.push(`import ${varName} from '${relPath}?raw';`);

        const content = fs.readFileSync(fullPath, "utf-8").split("\n");
        const nameLine = content.find(line => line.startsWith("# "));
        const idLine = content.find(line => line.startsWith("## "));
        const tagsLine = content.find(line => line.startsWith("### "));

        const name = nameLine ? nameLine.replace("# ", "").trim() : "Untitled";
        const id = idLine ? idLine.replace("## ", "").trim().toLowerCase() : "no-id";
        const tags = tagsLine
          ? tagsLine.replace("### ", "").split(",").map(t => t.trim().toLowerCase())
          : [];

        entries.push({
          name,
          tags,
          id,
          md: varName
        });
      }
    });
  }

  walk(mdsRoot);

  const output =
`${importLines.join("\n")}

// Auto-generated ${capitalize(folder)} Addons
const addon${capitalize(folder)} = ${JSON.stringify(entries, null, 2)
    .replace(/"md": "([^"]+)"/g, 'md: $1')
    .replace(/"name":/g, 'name:')
    .replace(/"tags":/g, 'tags:')
    .replace(/"id":/g, 'id:')
};

export default addon${capitalize(folder)};
`;

  fs.writeFileSync(outputFile, output, "utf-8");
  console.log(`Generates: ${outputFile}`);
});