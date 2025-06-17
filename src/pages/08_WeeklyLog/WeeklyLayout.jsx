import React from "react";
import { Link, useParams } from "react-router-dom";

export default function WeeklyLayout({ title, weeks, currentId, children }) {
  const { weekId } = useParams();
  return (
    <div className="flex w-full max-w-6xl mx-auto p-8 gap-8">
      {/* 左侧时间线 */}
      <div className="w-1/4">
        <div className="sticky top-24">
          <h2 className="text-xl font-bold mb-4">{title}</h2>
          <ul className="space-y-2">
            {weeks.map((w) => (
              <li key={w.id}>
                <Link
                  to={`../${w.id}`}
                  className={`block px-2 py-1 rounded transition ${
                    (weekId || currentId) === w.id
                      ? "bg-blue-100 font-bold text-blue-700"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {w.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* 右侧正文 */}
      <div className="w-3/4 bg-white rounded-lg shadow-lg p-8">
        {children}
      </div>
    </div>
  );
}