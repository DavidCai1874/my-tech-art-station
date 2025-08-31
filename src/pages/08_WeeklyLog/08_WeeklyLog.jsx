import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import periodGroups from "./Era.json";


// "#C4E1E6", A4CCD9, 8DBCC7
const COLORS = ["#e1c186ff", "#a3c9cfff" ];

export default function WeeklyLog() {
  const [bgColor, setBgColor] = useState(COLORS[0]);

  useEffect(() => {
    function onScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const numColors = COLORS.length;
      const percent = docHeight > 0 ? scrollTop / docHeight : 0;
      let idx = Math.floor(percent * numColors);
      if (idx >= numColors) idx = numColors - 1;
      setBgColor(COLORS[idx]);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="p-8 transition-colors duration-500"
      style={{ background: bgColor, minHeight: "100vh" }}
    >
      <div className="flex justify-center mt-10 mb-8">
        <div
          className="px-18 py-10 rounded-2xl shadow-[0_0_6px_4px_#DEAA79] bg-[#FFE6A9] flex flex-col items-center"
        >
          <h1
            className="font-bold text-center text-[#000000]"
            style={{
              textShadow: "0 0 10px rgba(0, 204, 255, 0.2)"
            }}
          >
            Weekly Logs
          </h1>
          <p className="text-center text-base text-[rgb(56, 56, 68)] opacity-80 mt-5 racking-wide">
            Walk deep into the logs, what treasures will you find...
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-6xl">
          {periodGroups.map((group) => (
            <div key={group.title} className="mb-10">
              <h2 className="font-semibold mb-4">{group.title}</h2>
              <div className="grid grid-cols-3 gap-8">
                {group.periods.map((period) => (
                  <Link
                    key={period.path}
                    to={`/weeklylog/${period.path}`}
                    className="bg-[#fafbff] rounded-lg shadow-lg h-48 
                      flex items-center justify-center text-center cursor-pointer 
                      transition duration-300 text-2xl font-semibold whitespace-pre-line 
                      hover:shadow-[0_0_16px_5px_rgba(0,191,255,0.7)] hover:scale-101 
                      relative overflow-hidden group"
                    style={
                      period.image
                        ? {
                            backgroundImage: `url(${period.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }
                        : {}
                    }
                  >
                    <div className="absolute inset-0 z-0 bg-white/25 group-hover:bg-blue-400/40 transition-all duration-300" />
                    <span className="relative z-10 text-black px-2">
                      {period.label}
                    </span>
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