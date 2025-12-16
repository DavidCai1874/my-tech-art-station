import React, { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";

export default function WeeklyLayout({ title, weeks, currentDate, children }) {
  const { weekDate } = useParams();
  const [move, setMove] = useState(true);
  const lastScroll = useRef(window.scrollY);

  useEffect(() => {
    function onScroll(){
      const current = window.scrollY;
      if (current > 50) {
        if (current > lastScroll.current) {
          setMove(false);
        } else {
          setMove(true);
        }
      } else {
        setMove(true);
      }
      lastScroll.current = current;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="flex w-full mx-auto p-8 gap-8">
      {/* left side gap */}
      <div className="basis-1/8 grow-0 shrink-0" />
      {/* left side timeline */}
      <div className="w-1/5">
        <div
          className={`bg-gray-50 rounded-lg shadow-lg p-8 sticky transition-all duration-300 ${
            move ? "top-24" : "top-4"
          }`}
        >
          <h2 className="text-xl font-bold mb-4">{title}</h2>
          <ul className="space-y-2">
            {weeks.map((w, idx) => (
              <React.Fragment key={w.date}>
                <li>
                  <Link
                    to={`../${w.date}`}
                    className={`block px-2 py-1 rounded transition ${
                      (weekDate || currentDate) === w.date
                        ? "bg-blue-100 font-bold text-blue-700"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {w.label}
                  </Link>
                </li>
                {idx < weeks.length - 1 && (
                  <hr className="border-t border-gray-200 my-1" />
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
      {/* right side */}
      <div className="w-4/5 bg-white rounded-lg shadow-lg p-8">
        {children}
      </div>
      {/* right side gap */}
      <div className="basis-1/8 grow-0 shrink-0" />
    </div>
  );
}

//this is only the layout