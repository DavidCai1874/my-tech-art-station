import { Routes, Route, useParams, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import WeeklyLayout from "../WeeklyLayout";
import ReactMarkdown from "react-markdown";
import weeks from "./2026_01Spring";

export default function _2026Spring() {
  return (
    <Routes>
      {/* Redirect to the first week's date by default */}
      <Route index element={<Navigate to={weeks[0].date} replace />} />
      {/* Route for displaying a specific week */}
      <Route path=":weekDate" element={<WeeklyWeek />} />
    </Routes>
  );
}

function WeeklyWeek() {
  const { weekDate } = useParams(); // Get the week date from the URL parameters
  const week = weeks.find(w => w.date === weekDate) || weeks[0]; // Find the corresponding week data
  const [md, setMd] = useState("");

  useEffect(() => {
    setMd(week.md || '');
  }, [week.md]);
  return (
    <WeeklyLayout
      title={
        <>
          2026<br />Spring
        </>
      }
      weeks={[...weeks]}
      currentDate={week.date}
    >
      <div className="markdown-body">
        <ReactMarkdown>{md}</ReactMarkdown>
      </div>
    </WeeklyLayout>
  );
}