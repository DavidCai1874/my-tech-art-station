import { Routes, Route } from "react-router-dom";
import AddonBlender from "./Addon_Blender.jsx";
import MarkdownPage from "./Addon_Blender_MD.jsx";

export default function AddonBlenderRouter() {
  return (
    <Routes>
      {/* Default route, show the list of addons */}
      <Route index element={<AddonBlender />} />
      {/* Route for filtering by tag */}
      <Route path="tag/:tag" element={<AddonBlender />} />
      {/* Show markdown page based on ID */}
      <Route path=":addonId" element={<MarkdownPage />} />
    </Routes>
  );
}