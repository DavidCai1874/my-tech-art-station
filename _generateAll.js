// runEverything.js
import { execSync } from "child_process";
import path from "path";

function run(script) {
  const fullPath = path.resolve(script);
  console.log(`>>> Running ${script}...`);
  execSync(`node ${script}`, { stdio: "inherit" });
}

//run("./scripts/generateSearchIndexWeeklyLog.js");
run("./scripts/generateTS.js");
run("./scripts/generateAddons.js");


// 以后还可以加更多