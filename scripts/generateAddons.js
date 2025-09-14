import fs from "fs"; // Node.js file system module
import path from "path"; // Node.js path module

// Capitalize the first letter of a string
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const tools = ["Maya", "Blender", "Others"];

// Root directory
const ROOT = path.join(process.cwd(), "src/pages/05_Addons");

tools.forEach(folder => {
  const mdsRoot = path.join(ROOT, folder, "mds");
  // Output JS file path for this tool
  const outputFile = path.join(ROOT, folder, `Addon_${capitalize(folder)}.js`);

  // If the mds directory doesn't exist, skip this tool
  if (!fs.existsSync(mdsRoot)) {
    console.warn(`Skipping ${folder} folder: no mds directory.`);
    return;
  }

  const importLines = [];
  const entries = [];

  // walk through the mds directory
  function walk(dir) {
    fs.readdirSync(dir).forEach(file => {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        // If it's a directory, walk into it
        walk(fullPath);
      } else if (file.endsWith(".md")) {
        // If it's a markdown file, process it
        const varName = file.replace(/\.md$/, "").replace(/[^a-zA-Z0-9_]/g, "_");
        // Relative path for import
        const relPath = './mds/' + path.relative(mdsRoot, fullPath).replace(/\\/g, '/');
        importLines.push(`import ${varName} from '${relPath}?raw';`);

        // Read file content and extract metadata
        const content = fs.readFileSync(fullPath, "utf-8").split("\n");
        const nameLine = content.find(line => line.startsWith("# "));
        const idLine = content.find(line => line.startsWith("## "));
        const tagsLine = content.find(line => line.startsWith("### "));

        // Extract name, id, and tags from markdown
        const name = nameLine ? nameLine.replace("# ", "").trim() : "Untitled";
        const id = idLine ? idLine.replace("## ", "").trim().toLowerCase() : "no-id";
        const tags = tagsLine
          ? tagsLine.replace("### ", "").split(",").map(t => t.trim().toLowerCase())
          : [];

        // Add entry for this addon
        entries.push({
          name,
          tags,
          id,
          md: varName
        });
      }
    });
  }

  // Start walking through the mds directory
  walk(mdsRoot);

  // Generate output JS file content
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

  // Write the generated JS file
  fs.writeFileSync(outputFile, output, "utf-8");
  console.log(`Generates: ${outputFile}`);
});