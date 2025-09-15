import fs from "fs";
import path from "path";

// capitalize the first letter of a string
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// root directory
const ROOT = path.join(process.cwd(), "src/pages/06_TroubleShooting");
const tools = ["Maya", "Unreal", "Blender", "Pipeline", "General"];

tools.forEach(tool => {
  // directory for each tool
  const toolDir = path.join(ROOT, tool);
  // directory containing markdown files
  const mdsDir = path.join(toolDir, "mds");
  // output JS file path for this tool
  const outputFile = path.join(toolDir, `TS_${capitalize(tool)}.js`);

  // if the mds directory doesn't exist, skip this tool
  if (!fs.existsSync(mdsDir)) {
    console.warn(`Skipping ${tool} folder: no mds directory.`);
    return;
  }

  const entries = [];
  const importLines = [];

  // read all files in the mds directory
  fs.readdirSync(mdsDir).forEach(file => {
    if (!file.endsWith(".md")) return; // Only process markdown files

    // relative path for import
    const filePath = `./mds/${file}`;
    const varName = file
      .replace(/\.md$/, "")
      .replace(/[^a-zA-Z0-9_]/g, "_");

    // add import statement for this markdown file
    importLines.push(`import ${varName} from '${filePath}?raw';`);

    // read file content and extract metadata
    const content = fs.readFileSync(path.join(mdsDir, file), "utf-8").split("\n");
    const titleLine = content.find(line => line.startsWith("# "));
    const numberLine = content.find(line => line.startsWith("## "));
    const dateLine = content.find(line => line.startsWith("### "));

    // extract title, id, and date from markdown
    const title = titleLine ? titleLine.replace("# ", "").trim() : "Untitled";
    const id = numberLine ? numberLine.replace("## ", "").trim().toLowerCase() : "no-id";
    const date = dateLine ? dateLine.replace("### ", "").trim() : null; 

    // add entry for this troubleshooting item
    entries.push({
      title,
      id,
      date, // add date field
      md: varName
    });
  });

  // generate output JS file content
  const output =
`${importLines.join("\n")}

// auto-generated file for ${tool}
const TS_${capitalize(tool)} = ${JSON.stringify(entries, null, 2)
    .replace(/"md": "([^"]+)"/g, 'md: $1')
    .replace(/"title":/g, 'title:')
    .replace(/"id":/g, 'id:')
    .replace(/"date":/g, 'date:')
};
export default TS_${capitalize(tool)};
`;

  // clean and write the generated JS file
  fs.writeFileSync(outputFile, output, "utf-8");
  console.log(`Generates: ${outputFile}`);
});