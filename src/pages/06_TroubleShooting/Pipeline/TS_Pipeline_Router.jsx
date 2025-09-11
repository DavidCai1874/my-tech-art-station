import { Routes, Route, useParams, Navigate } from "react-router-dom";
import Pipeline from "./TS_Pipeline.jsx";
import MarkdownPage from "./TS_Pipeline_MD.jsx";
// ...其他import...

export default function TSPipelineRouter() {
  return (
    <Routes>
      <Route index element={<Pipeline />} />
      <Route path=":issueId" element={<MarkdownPage />} />
    </Routes>
  );
}