import updates from '../../../public/_updates.js';

export default function UpdatesPage() {
  // 假设每条 update 结构为 { id, text, date: '2024-05-25', year: 2024 }
  const years = Array.from(new Set(updates.map(u => u.year))).sort((a, b) => b - a);

  return (
    <div className="max-w-5xl mx-auto py-12">
      {/* 顶部栏 */}
      <div className="text-3xl font-bold mb-8 border-b pb-4 sticky top-0 bg-gray-100 z-10">
        All Updates (WIP🚧)
      </div>
      <div className="flex">
        {/* 左侧年份栏 */}
        <aside className="w-32 pr-6 border-r">
          <div className="font-semibold mb-4">Year</div>
          <ul className="space-y-2">
            {years.map(year => (
              <li key={year} className="text-lg">{year}</li>
            ))}
          </ul>
        </aside>
        {/* 右侧更新内容 */}
        <main className="flex-1 pl-8">
          {updates.map(item => (
            <div key={item.id} className="mb-8">
              <div className="text-gray-500 text-sm mb-1">{item.date}</div>
              <div className="text-lg">{item.text}</div>
              <hr className="mt-4" />
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}