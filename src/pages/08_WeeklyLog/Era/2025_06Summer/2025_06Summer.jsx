import { Routes, Route, useParams, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import WeeklyLayout from "../../WeeklyLayout";
import ReactMarkdown from "react-markdown";

// 假设你的 md 文件都放在 public/weeklylog/2025_06Summer/ 目录下
const weeks = [
  {
    id: "20240601",
    date: "2024-06-01",
    label: "Week 1 (Jun 1)",
    md: "/weeklylog/2025_06Summer/20240601.md"
  },
  {
    id: "20240608",
    date: "2024-06-08",
    label: "Week 2 (Jun 8)",
    md: "/weeklylog/2025_06Summer/20240608.md"
  }
  // ...更多周
];

export default function Summer2025() {
  return (
    <Routes>
      <Route index element={<Navigate to={weeks[0].id} replace />} />
      <Route path=":weekId" element={<WeeklyWeek />} />
    </Routes>
  );
}

function WeeklyWeek() {
  const { weekId } = useParams();
  const week = weeks.find(w => w.id === weekId) || weeks[0];
  const [md, setMd] = useState("");

  useEffect(() => {
    fetch(week.md)
      .then(res => res.text())
      .then(setMd);
  }, [week.md]);

  return (
    <WeeklyLayout
      title="2025 Summer Weekly Log"
      weeks={[...weeks].reverse()}
      currentId={week.id}
    >
      <div className="mb-4 text-gray-500">{week.date}</div>
      <ReactMarkdown>{md}</ReactMarkdown>
    </WeeklyLayout>
  );
}