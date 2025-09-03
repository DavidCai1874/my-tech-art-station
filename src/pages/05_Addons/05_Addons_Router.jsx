import { Routes, Route } from "react-router-dom";
import Addons from "./05_Addons.jsx";
import AddonMaya from "./Maya/Addon_Maya.jsx";
// 你可以继续添加 Blender、General 等页面

export default function AddonsRouter() {
  return (
    <Routes>
      <Route path="maya/*" element={<AddonMaya />} />
      {/* <Route path="blender/*" element={<AddonBlender />} /> */}
      {/* <Route path="general/*" element={<AddonGeneral />} /> */}
      <Route path="/" element={<Addons />} />
    </Routes>
  );
}