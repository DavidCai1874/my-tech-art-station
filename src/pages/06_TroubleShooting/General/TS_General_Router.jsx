import { Routes, Route, useParams, Navigate } from "react-router-dom";
import Pipeline from "./TS_General.jsx";
import MarkdownPage from "./TS_General_MD.jsx";

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