import { Routes, Route } from "react-router-dom";
import TroubleShooting from "./06_TroubleShooting.jsx";
import TroubleShootingMaya from "./Maya/TroubleShooting_Maya.jsx";
import TroubleShootingUnreal from "./Unreal/TS_Unreal_Router.jsx";

export default function AddonsRouter() {
  return (
    <Routes>
      <Route path="maya/*" element={<TroubleShootingMaya />} />
      <Route path="unreal/*" element={<TroubleShootingUnreal />} />
      <Route path="/" element={<TroubleShooting />} />
    </Routes>
  );
}