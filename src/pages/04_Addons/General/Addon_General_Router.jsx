import { Routes, Route } from "react-router-dom";
import AddonGeneral from "./Addon_General.jsx";

export default function AddonGeneralRouter() {
  return (
    <Routes>
      {/* Default route, show the list of addons */}
      <Route index element={<AddonGeneral />} />
      {/* Route for filtering by tag */}
      <Route path="tag/:tag" element={<AddonGeneral />} />
    </Routes>
  );
}