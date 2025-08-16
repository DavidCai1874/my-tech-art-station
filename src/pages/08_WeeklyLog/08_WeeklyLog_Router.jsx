import { Routes, Route } from "react-router-dom";
import WeeklyLogs from "./08_WeeklyLog.jsx";
import Summer2025 from "./Era/2025_06Summer/2025_06Summer.jsx";
import Fall2025 from "./Era/2025_09Fall/2025_09Fall.jsx";


export default function WeeklyLog() {
  return (
    <Routes>
      <Route path="2025-09fall/*" element={<Fall2025 />} />
      <Route path="2025-06summer/*" element={<Summer2025 />} />
      <Route path="/" element={<WeeklyLogs />} />
    </Routes>
  );
}