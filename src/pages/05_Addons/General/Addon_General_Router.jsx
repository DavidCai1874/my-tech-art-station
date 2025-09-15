import { Routes, Route } from "react-router-dom";
import AddonGeneral from "./Addon_General.jsx";
import MarkdownPage from "./Addon_General_MD.jsx";

export default function AddonGeneralRouter() {
  return (
    <Routes>
      {/* Default route, show the list of addons */}
      <Route index element={<AddonGeneral />} />
      {/* Route for filtering by tag */}
      <Route path="tag/:tag" element={<AddonGeneral />} />
      {/* Show markdown page based on ID */}
      <Route path=":addonId" element={<MarkdownPage />} />
    </Routes>
  );
}