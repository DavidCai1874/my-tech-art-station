import { Routes, Route } from "react-router-dom";
import WeeklyLogs from "./06_WeeklyLog.jsx";
import Summer2025 from "./Era/2025_06Summer/2025_06Summer.jsx";
import Fall2025 from "./Era/2025_09Fall/2025_09Fall.jsx";
import Spring2026 from "./Era/2026_01Spring/2026_01Spring.jsx";


export default function WeeklyLog() {
  return (
    <Routes>
      <Route path="2026-01spring/*" element={<Spring2026 />} />
      <Route path="2025-09fall/*" element={<Fall2025 />} />
      <Route path="2025-06summer/*" element={<Summer2025 />} />
      <Route path="/" element={<WeeklyLogs />} />
    </Routes>
  );
}