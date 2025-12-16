import { Routes, Route } from "react-router-dom";
import TroubleShooting from "./05_TroubleShooting.jsx";
import TroubleShootingMaya from "./Maya/TS_Maya_Router.jsx";
import TroubleShootingUnreal from "./Unreal/TS_Unreal_Router.jsx";
import TroubleShootingPipeline from "./Pipeline/TS_Pipeline_Router.jsx";
import TroubleShootingBlender from "./Blender/TS_Blender_Router.jsx";
import TroubleShootingGeneral from "./General/TS_General_Router.jsx";

export default function AddonsRouter() {
  return (
    <Routes>
      <Route path="maya/*" element={<TroubleShootingMaya />} />
      <Route path="unreal/*" element={<TroubleShootingUnreal />} />
      <Route path="pipeline/*" element={<TroubleShootingPipeline />} />
      <Route path="blender/*" element={<TroubleShootingBlender />} />
      <Route path="general/*" element={<TroubleShootingGeneral />} />
      <Route path="/" element={<TroubleShooting />} />
    </Routes>
  );
}