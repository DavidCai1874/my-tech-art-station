import fs from "fs";
import path from "path";

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const ROOT = path.join(process.cwd(), "src/pages/06_TroubleShooting"); // 根目录
const tools = ["Maya", "Unreal", "Blender", "Pipeline", "Others"]; // 你可以手动加

tools.forEach(tool => {
  const toolDir = path.join(ROOT, tool);
  const mdsDir = path.join(toolDir, "mds");
  const outputFile = path.join(toolDir, `TS_${capitalize(tool)}.js`);

  if (!fs.existsSync(mdsDir)) {
    console.warn(`Skipping ${tool} folder: no mds directory.`);
    return;
  }

  const entries = [];
  const importLines = [];

  fs.readdirSync(mdsDir).forEach(file => {
    if (!file.endsWith(".md")) return;

    const filePath = `./mds/${file}`;
    const varName = file
      .replace(/\.md$/, "")
      .replace(/[^a-zA-Z0-9_]/g, "_"); // 变量名安全处理

    importLines.push(`import ${varName} from '${filePath}?raw';`);

    const content = fs.readFileSync(path.join(mdsDir, file), "utf-8").split("\n");
    const titleLine = content.find(line => line.startsWith("# "));
    const numberLine = content.find(line => line.startsWith("## "));

    const title = titleLine ? titleLine.replace("# ", "").trim() : "Untitled";
    const id = numberLine ? numberLine.replace("## ", "").trim().toLowerCase() : "no-id";

    entries.push({
      title,
      id,
      md: varName
    });
  });

  // 生成 JS 文件
  const output =
`${importLines.join("\n")}

// Auto-generated file for ${tool}
const TS_${capitalize(tool)} = ${JSON.stringify(entries, null, 2)
    .replace(/"md": "([^"]+)"/g, 'md: $1')
    .replace(/"title":/g, 'title:')
    .replace(/"id":/g, 'id:')
};
export default TS_${capitalize(tool)};
`;

  fs.writeFileSync(outputFile, output, "utf-8");
  console.log(`✅ 生成: ${outputFile}`);
});