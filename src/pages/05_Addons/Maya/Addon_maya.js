import md2024_01 from './mds/Animation/m-a-001.md?raw';
import md2024_02 from './mds/ProceduralModelling/m-pm-001.md?raw';
// ...更多 md 文件

const mayaAddons = [
  {
    id: "m-a-001",
    md: md2024_01,
    name: "Animation Blocking Tool",
    tags: ["animation", "python"],
    description: "Blocks your animation, blocks your life."
  },
  {
    id: "m-pm-001",
    md: md2024_02,
    name: "Procedural Gear Generator",
    tags: ["procedural modeling", "python"],
    description: "Gear up"
  },
  // ...更多插件
];

export default mayaAddons;