import { Routes, Route, useParams, Navigate } from "react-router-dom";
import AddonMaya from "./Addon_Maya.jsx";

export default function AddonMayaRouter() {
  return (
    <Routes>
      {/* Default route, show the list of addons */}
      <Route index element={<AddonMaya />} />
      {/* Route for filtering by tag */}
      <Route path="tag/:tag" element={<AddonMaya />} />
    </Routes>
  );
}