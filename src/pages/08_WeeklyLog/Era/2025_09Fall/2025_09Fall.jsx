import { Routes, Route, useParams, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import WeeklyLayout from "../WeeklyLayout";
import ReactMarkdown from "react-markdown";
import weeks from "./2025_09fall";
import "../../MarkdownBody.css";

export default function _2025Fall() {
  return (
    <Routes>
      <Route index element={<Navigate to={weeks[0].date} replace />} />
      <Route path=":date" element={<WeeklyWeek />} />
    </Routes>
  );
}

function WeeklyWeek() {
  const { weekDate } = useParams();
  const week = weeks.find(w => w.date === weekDate) || weeks[0];
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