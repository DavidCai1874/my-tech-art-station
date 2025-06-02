import { Link, useParams, Navigate } from "react-router-dom";
import WeeklyLayout from "../../WeeklyLayout";
import ReactMarkdown from "react-markdown";

// 假设你有所有周记的 md 内容和 meta 信息
const weeks = [
  { date: "2025-06-01", path: "06_01/20250601", label: "第1周" },
  { date: "2025-06-08", path: "06_08/20250608", label: "第2周" },
  // ...
];

// 你可以用 import 动态加载 md 文件，或用 fetch
import week1md from "./06_01/20250601.md?raw";
import week2md from "./06_08/20250608.md?raw";
// ...

const mdMap = {
  "06_01/20250601": week1md,
  "06_08/20250608": week2md,
  // ...
};

export default function Summer2025() {
  const { "*": subpath } = useParams();

  // 默认跳转到最新一周
  if (!subpath) {
    return <Navigate to={weeks[0].path} replace />;
  }

  const current = weeks.find(w => w.path === subpath);

  return (
    <WeeklyLayout
      title="2025 Summer"
      timeline={weeks.map(w => (
        <Link
          key={w.path}
          to={`/weeklylog/202506summer/${w.path}`}
        >
          {w.date} {w.label}
        </Link>
      ))}
    >
      <ReactMarkdown>{mdMap[subpath] || "暂无内容"}</ReactMarkdown>
    </WeeklyLayout>
  );
}