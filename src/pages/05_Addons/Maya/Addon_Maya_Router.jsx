import { Routes, Route, useParams, Navigate } from "react-router-dom";
import AddonMaya from "./Addon_Maya.jsx";
import MarkdownPage from "./mds/Markdown_Page.jsx";
// ...其他import...

export default function AddonMayaRouter() {
  return (
    <Routes>
      <Route index element={<AddonMaya />} />
      <Route path="tag/:tag" element={<AddonMaya />} />
      <Route path=":addonId" element={<MarkdownPage />} />
    </Routes>
  );
}