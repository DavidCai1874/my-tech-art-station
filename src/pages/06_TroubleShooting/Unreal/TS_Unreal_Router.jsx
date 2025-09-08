import { Routes, Route, useParams, Navigate } from "react-router-dom";
import Unreal from "./TS_Unreal.jsx";
import MarkdownPage from "../TS_Markdown.jsx";
// ...其他import...

export default function AddonMayaRouter() {
  return (
    <Routes>
      <Route index element={<Unreal />} />
      <Route path=":issueId" element={<MarkdownPage />} />
    </Routes>
  );
}