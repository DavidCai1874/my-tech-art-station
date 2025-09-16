import { execSync } from "child_process"; //for running other scripts
import path from "path"; //for paths

function run(script) 
{
  const fullPath = path.resolve(script); //get full path
  console.log(`>>> Running ${script}...`);
  execSync(`node ${script}`, { stdio: "inherit" }); //use node to run the script
}

run("./scripts/markdownFormat.js");
run("./scripts/generateTS.js");
run("./scripts/generateAddons.js");
// generates the TS and Addons data files including name, date, id, tags, etc
// npm run blue