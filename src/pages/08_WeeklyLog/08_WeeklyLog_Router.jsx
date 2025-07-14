import { Routes, Route } from "react-router-dom";
import WeeklyLogs from "./08_WeeklyLog.jsx";
import Summer2025 from "./Era/2025_06Summer/2025_06Summer.jsx";
import Fall2025 from "./Era/2025_09Fall/2025_09Fall.jsx";


export default function WeeklyLog() {
  return (
    <Routes>
      {/* add more routers here*/}
      <Route path="202509fall/*" element={<Fall2025 />} />
      <Route path="202506summer/*" element={<Summer2025 />} />
      <Route path="/" element={<WeeklyLogs />} />
    </Routes>
  );
}