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
      if (stat.isDirectory()) 
      {
        // if it's a directory, walk into it
        walk(fullPath);
      } 
      else if (file.endsWith(".md")) 
      {
        // read file content and extract metadata
        const content = fs.readFileSync(fullPath, "utf-8").split("\n");
        const nameLine = content.find(line => line.startsWith("# "));
        const dateLine = content.find(line => line.startsWith("## "));
        const tagsLine = content.find(line => line.startsWith("### "));
        const githubDocLine = content.find(line => line.startsWith("#### "));
        const imageLine = content.find(line => line.startsWith("##### "));

        const name = nameLine ? nameLine.replace("# ", "").trim() : "UNTITLED";
        const id = file.replace(/\.md$/, "").toLowerCase();
        const date = dateLine ? dateLine.replace("## ", "").trim() : null;
        const tags = tagsLine ? tagsLine.replace("### ", "").split(",").map(t => t.trim().toLowerCase()) : [];
        const githubDoc = githubDocLine ? githubDocLine.replace("#### ", "").trim() : null;
        const image = imageLine ? imageLine.replace("##### ", "").replace(/^!\[.*\]\((.*)\)$/, "$1").trim() : null;

        // infos
        entries.push({
          name,
          id,
          date,
          tags,
          githubDoc,
          image,
        });
      }
    });
  }

  // walking through the mds directory
  walk(mdsRoot);

  // generate output
  const output =
`// auto-generated ${capitalize(folder)} Addons
const addon${capitalize(folder)} = ${JSON.stringify(entries, null, 2)
    .replace(/"name":/g, 'name:')
    .replace(/"id":/g, 'id:')
    .replace(/"date":/g, 'date:')
    .replace(/"tags":/g, 'tags:')
    .replace(/"githubDoc":/g, 'githubDoc:')
    .replace(/"image":/g, 'image:')
};

export default addon${capitalize(folder)};
`;

  // write the JS file
  fs.writeFileSync(outputFile, output, "utf-8");
  console.log(`Generates: ${outputFile}`);
});