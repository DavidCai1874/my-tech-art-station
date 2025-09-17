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
    <div className="p-8 flex flex-col items-center max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">About Me</h1>
      {/* pfp with click-to-zoom animation */}
      <img
        src={orangeIcon}
        alt="I'm an orange"
        className={`w-32 h-32 rounded-full mb-4 shadow-lg transition-transform duration-200 cursor-pointer ${isZoomed ? "scale-125" : "scale-100"}`}
        onClick={handleIconClick}
      />
      {/* Self-introduction */}
      <div className="text-center text-lg">
        <p>Hi, I'm David. But more importantly...</p>
        <p className="font-bold text-orange-500 mt-2">I'm an orange.</p>
        <p className="mt-8 text-gray-600">
          I solve tech problems. If you need help, just DM me on Discord (if you know me) or email me at <span className="underline font-bold ml-1">d916techart@gmail.com</span>
        </p>
        <p className="mt-15 text-gray-400">
          Why I built this website is because I believe knowledge should be public, logical, and honest. I created this site so people can find solutions, or at least can have someone to ask for help. I don’t want to see the same bugs and issues pop up over and over again. 
          I personally find reading well-structured docs is a much better experience than rewatching YouTube tutorials, especially when I’m troubleshooting the same thing for the second (or third!) time.
          This website is still just starting, but my goal is to share what I learn and maybe leave something useful behind.
        </p>
        <p className="mt-200 text-gray-600">
        And be an orange.🍊
        </p>
      </div>
    </div>
  );
}