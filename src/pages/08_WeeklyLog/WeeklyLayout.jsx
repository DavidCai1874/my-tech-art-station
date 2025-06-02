import React from "react";

export default function WeeklyLayout({ title, timeline, children }) {
  return (
    <div className="flex w-full max-w-6xl mx-auto p-8 gap-8">
      {/* 左侧时间线 */}
      <div className="w-1/4">
        <div className="sticky top-24">
          <h2 className="text-xl font-bold mb-4">{title}</h2>
          <ul className="space-y-2">
            {timeline.map((item, idx) => (
              <li key={idx} className="text-gray-600">{item}</li>
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