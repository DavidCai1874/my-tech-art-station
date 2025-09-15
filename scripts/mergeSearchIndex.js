import fs from "fs";
import path from "path";

// read the three search index files
const mainIndexPath = path.join(process.cwd(), "public/searchIndex.json");
const weeklyLogPath = path.join(process.cwd(), "public/searchIndexWeeklyLog.json");
const addonPath = path.join(process.cwd(), "public/searchIndexAddon.json");
const tsPath = path.join(process.cwd(), "public/searchIndexTS.json");

// clear main index before merging
fs.writeFileSync(mainIndexPath, JSON.stringify([], null, 2));

// parse all json files
const mainIndex = JSON.parse(fs.readFileSync(mainIndexPath, "utf-8"));
const weeklyLogIndex = JSON.parse(fs.readFileSync(weeklyLogPath, "utf-8"));
const addonIndex = JSON.parse(fs.readFileSync(addonPath, "utf-8"));
const tsIndex = JSON.parse(fs.readFileSync(tsPath, "utf-8"));

// merge all arrays
const combined = [...mainIndex, ...weeklyLogIndex, ...addonIndex, ...tsIndex];

// write the combined array back to searchIndex.json
fs.writeFileSync(mainIndexPath, JSON.stringify(combined, null, 2));

console.log("searchIndex.json updated with merged data!");