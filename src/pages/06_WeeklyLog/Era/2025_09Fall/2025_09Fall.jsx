import { Routes, Route, useParams, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import WeeklyLayout from "../WeeklyLayout";
import ReactMarkdown from "react-markdown";
import weeks from "./2025_09Fall";

export default function _2025Fall() {
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
          2025<br />Fall
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