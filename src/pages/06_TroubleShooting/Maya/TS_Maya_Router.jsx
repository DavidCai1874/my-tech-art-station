import { Routes, Route, useParams, Navigate } from "react-router-dom";
import Maya from "./TS_Maya.jsx";
import MarkdownPage from "./TS_Maya_MD.jsx";
// ...其他import...

export default function MayaRouter() {
  return (
    <Routes>
      <Route index element={<Maya />} />
      <Route path=":issueId" element={<MarkdownPage />} />
    </Routes>
  );
}