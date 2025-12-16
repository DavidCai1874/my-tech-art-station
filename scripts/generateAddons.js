import fs from "fs";
import path from "path";

// capitalize the first letter of a string
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

//folders to process
const tools = ["Maya", "Blender", "General"];

// root directory
const ROOT = path.join(process.cwd(), "src/pages/04_Addons");

tools.forEach(folder => {
  const mdsRoot = path.join(ROOT, folder, "mds");
  // output JS file path for this tool
  const outputFile = path.join(ROOT, folder, `Addon_${capitalize(folder)}.js`);

  // if the mds directory doesn't exist, skip this tool
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
        // if it's a directory, walk into it
        walk(fullPath);
      } else if (file.endsWith(".md")) {
        // if it's a markdown file, process it
        const varName = file.replace(/\.md$/, "").replace(/[^a-zA-Z0-9_]/g, "_");
        // relative path for import
        const relPath = './mds/' + path.relative(mdsRoot, fullPath).replace(/\\/g, '/');
        importLines.push(`import ${varName} from '${relPath}?raw';`);

        // read file content and extract metadata
        const content = fs.readFileSync(fullPath, "utf-8").split("\n");
        const nameLine = content.find(line => line.startsWith("# "));
        const idLine = content.find(line => line.startsWith("## "));
        // detect date from the third line if it starts with '### '
        let date = null;
        if (content[2] && content[2].startsWith("### ")) {
          date = content[2].replace("### ", "").trim();
        }
        // detect tags from the fourth line if it starts with '#### '
        let tags = [];
        if (content[3] && content[3].startsWith("#### ")) {
          tags = content[3].replace("#### ", "").split(",").map(t => t.trim().toLowerCase());
        }

        // extract name and id from markdown
        const name = nameLine ? nameLine.replace("# ", "").trim() : "Untitled";
        const id = idLine ? idLine.replace("## ", "").trim().toLowerCase() : "no-id";

        // infos
        entries.push({
          name,
          id,
          date,
          tags,
          md: varName
        });
      }
    });
  }

  // walking through the mds directory
  walk(mdsRoot);

  // generate output
  const output =
`${importLines.join("\n")}

// auto-generated ${capitalize(folder)} Addons
const addon${capitalize(folder)} = ${JSON.stringify(entries, null, 2)
    .replace(/"md": "([^"]+)"/g, 'md: $1')
    .replace(/"name":/g, 'name:')
    .replace(/"id":/g, 'id:')
    .replace(/"date":/g, 'date:')
    .replace(/"tags":/g, 'tags:')
};

export default addon${capitalize(folder)};
`;

  // write the JS file
  fs.writeFileSync(outputFile, output, "utf-8");
  console.log(`Generates: ${outputFile}`);
});