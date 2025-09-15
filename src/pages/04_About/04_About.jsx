import { useState } from "react";
import orangeIcon from "./icon.png";

export default function About() {
  // state for icon scale animation
  const [isZoomed, setIsZoomed] = useState(false);

  // handle click: zoom in, then zoom out after 300ms
  const handleIconClick = () => {
    setIsZoomed(true);
    setTimeout(() => setIsZoomed(false), 100);
  };

  return (
    <div className="p-8 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">About Me</h1>
      {/* pfp with click-to-zoom animation */}
      <img
        src={orangeIcon}
        alt="I'm an orange"
        className={`w-32 h-32 rounded-full mb-4 shadow-lg transition-transform duration-300 cursor-pointer ${isZoomed ? "scale-140" : "scale-100"}`}
        onClick={handleIconClick}
      />
      {/* Self-introduction */}
      <div className="text-center text-lg">
        <p>Hi, I'm David. But more importantly...</p>
        <p className="font-bold text-orange-500 mt-2">I'm an orange.</p>
        <p className="mt-4 text-gray-600">
          I solve tech problems. If you need help, just dm me on discord! (for now)
        </p>
      </div>
    </div>
  );
}