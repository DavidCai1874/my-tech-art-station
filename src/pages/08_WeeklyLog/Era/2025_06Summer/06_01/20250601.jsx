import WeeklyLayout from "../../../WeeklyLayout";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function Weekly_2025_06_01() {
  const [content, setContent] = useState("");

  useEffect(() => {
    import("./20250601.md").then(res => {
      fetch(res.default)
        .then(response => response.text())
        .then(setContent);
    });
  }, []);

  const timeline = [
    "06-01 周记",
  ];

  return (
    <WeeklyLayout title="2025 Summer - Week 1" timeline={timeline}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </WeeklyLayout>
  );
}