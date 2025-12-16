import { Routes, Route } from "react-router-dom";
import Unreal from "./TS_Unreal.jsx";
import MarkdownPage from "./TS_Unreal_MD.jsx";

export default function TSUnrealRouter() {
  return (
    <Routes>
      {/* Default route, show the list of Unreal articles */}
      <Route index element={<Unreal />} />
      {/* Show markdown page based on ID */}
      <Route path=":issueId" element={<MarkdownPage />} />
    </Routes>
  );
}