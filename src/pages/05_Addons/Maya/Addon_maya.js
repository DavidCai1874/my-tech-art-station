import md2024_01 from './mds/maya-addon-01.md?raw';
import md2024_02 from './mds/maya-addon-02.md?raw';
// ...更多 md 文件

const mayaAddons = [
  {
    id: "maya-addon-01",
    md: md2024_01,
    name: "Auto Renamer",
    tags: ["workflow", "rename", "python"],
    description: "Automatically rename objects in Maya based on custom rules."
  },
  {
    id: "maya-addon-02",
    md: md2024_02,
    name: "Quick Export",
    tags: ["export", "python"],
    description: "Fast batch export for selected objects."
  },
  // ...更多插件
];

export default mayaAddons;