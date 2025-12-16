import { Routes, Route, useParams, Navigate } from "react-router-dom";
import Pipeline from "./TS_Pipeline.jsx";
import MarkdownPage from "./TS_Pipeline_MD.jsx";

export default function TSPipelineRouter() {
  return (
    <Routes>
      {/* Default route, show the list of articles */}
      <Route index element={<Pipeline />} />
      {/* Show markdown page based on ID */}
      <Route path=":issueId" element={<MarkdownPage />} />
    </Routes>
  );
}