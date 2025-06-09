import { Routes, Route, Link } from "react-router-dom";
import periodGroups from "./Era.json";
import Summer2025 from "./Era/2025_06Summer/2025_06Summer";

// 这个组件负责渲染格子页面
function WeeklyProgress() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8 text-center">Weekly Log🚧</h1>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-6xl">
          {periodGroups.map((group) => (
            <div key={group.title} className="mb-10">
              <h2 className="text-xl font-semibold mb-4">{group.title}</h2>
              <div className="grid grid-cols-3 gap-8">
                {group.periods.map((period) => (
                  <Link
                    key={period.path}
                    to={period.path}
                    className="bg-white rounded-lg shadow-lg h-48 flex items-center justify-center text-center cursor-pointer hover:bg-blue-100 transition text-2xl font-semibold whitespace-pre-line"
                  >
                    {period.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// 这个是主路由组件
export default function WeeklyLog() {
  return (
    <Routes>
      <Route path="/" element={<WeeklyProgress />} />
      <Route path="202506summer/*" element={<Summer2025 />} />
      {/* 以后有新页面继续加 */}
    </Routes>
  );
}