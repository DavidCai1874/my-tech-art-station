import updates from '../../../public/_updates.js';
import { useRef, useState, useEffect } from 'react';

export default function UpdatesPage() {
  const years = Array.from(
    new Set(updates.map(u => u.date.slice(0, 4)))
  ).sort((a, b) => b - a);

  const yearRefs = useRef({});
  years.forEach(year => {
    if (!yearRefs.current[year]) {
      yearRefs.current[year] = null;
    }
  });

  const updatesByYear = years.map(year => ({
    year,
    items: updates.filter(u => u.date.startsWith(year)),
  }));

  const scrollToYear = year => {
    const el = yearRefs.current[year];
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // 控制 year bar 显隐
  const [move, setMove] = useState(true);
  const lastScroll = useRef(0);

  useEffect(() => {
    function onScroll() {
      const current = window.scrollY;
      if (current > 50) {
        if (current > lastScroll.current) {
          setMove(false); // 向下滚动隐藏
        } else {
          setMove(true);  // 向上滚动显示
        }
      } else {
        setMove(true);    // 回到顶部显示
      }
      lastScroll.current = current;
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="max-w-5xl mx-auto py-12">
      {/* top */}
      <div className="text-3xl font-bold mb-8 border-b pb-4 z-10 ">
        All Updates 🔔
      </div>
      <div className="flex">
        {/* year bar */}
        <aside
          className={`sticky transition-all duration-300 ${
            move ? "top-24" : "top-4"
          } w-32 pr-6 border-r self-start h-fit pl-3`}
        >
          <div className="font-semibold text-xl mb-4">Year</div>
          <ul className="space-y-2 ">
            {years.map(year => (
              <li
                key={year}
                className="text-lg cursor-pointer text-black hover:font-semibold"
                onClick={() => scrollToYear(year)}
              >
                {year}
              </li>
            ))}
          </ul>
        </aside>
        {/* updates */}
        <main className="flex-1 pl-8">
          {updatesByYear.map(({ year, items }, idx) => (
            <div key={year} ref={el => (yearRefs.current[year] = el)}>
              <div className={`text-2xl font-bold mb-4 ${idx === 0 ? '' : 'mt-8'}`}>{year}</div>
              {items.map(item => (
                <div key={item.date + item.text} className="mb-8">
                  <div className="text-gray-500 text-sm mb-1">{item.date}</div>
                  <div className="text-lg">{item.text}</div>
                  <hr className="mt-4" />
                </div>
              ))}
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}