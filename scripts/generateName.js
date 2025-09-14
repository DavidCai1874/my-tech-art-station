import { execSync } from "child_process"; //for running other scripts
import path from "path"; //for paths

function run(script) 
{
  const fullPath = path.resolve(script); //get full path
  console.log(`>>> Running ${script}...`);
  execSync(`node ${script}`, { stdio: "inherit" }); //use node to run the script
}

run("./scripts/generateTS.js");
run("./scripts/generateAddons.js");
//run("./scripts/generateSearchIndexWeeklyLog.js");

// 以后还可以加更多