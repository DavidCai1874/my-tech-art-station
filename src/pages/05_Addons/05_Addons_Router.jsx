import { Routes, Route } from "react-router-dom";
import Addons from "./05_Addons.jsx";
import AddonMayaRouter from "./Maya/Addon_Maya_Router.jsx";

export default function AddonsRouter() {
  return (
    <Routes>
      <Route path="maya/*" element={<AddonMayaRouter />} />
      {/* <Route path="blender/*" element={<AddonBlender />} /> */}
      {/* <Route path="general/*" element={<AddonGeneral />} /> */}
      <Route path="/" element={<Addons />} />
    </Routes>
  );
}