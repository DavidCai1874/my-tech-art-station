import { Link } from 'react-router-dom';

//cover images
import mayaImg from "./maya_cover.png";
import unrealImg from "./unreal_cover.png";
import pipelineImg from "./pipeline_cover.png";
import blenderImg from "./blender_cover.png";

const list = [
  { to: "maya", img: mayaImg, title: "Maya" },
  { to: "unreal", img: unrealImg, title: "Unreal Engine" },
  { to: "pipeline", img: pipelineImg, title: "Pipeline" },
  { to: "blender", img: blenderImg, title: "Blender" },
];

export default function TroubleShooting() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="w-[90%] max-w-7xl flex flex-col items-start">
        {/* Page title */}
        <h1 className="font-bold mt-14 mb-6 ml-2">TroubleShooting</h1>
        <p className="text-sm text-gray-600 ml-2 mb-2">
          I’ll deal with it after my snack.
        </p>
        {/* Grid, 3 per row */}
        <div className="grid grid-cols-3 gap-20 w-full mt-10">
          {list.map(item => (
            <Link
              key={item.title}
              to={item.to}
              className="flex-1 h-[15rem] flex flex-col rounded-2xl overflow-hidden relative shadow-md border hover:scale-101 transition-transform duration-200"
            >
              {/* Category cover image */}
              <img
                src={item.img}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ zIndex: 1 }}
              />
              {/* Overlay for dark effect */}
              <div
                className="absolute inset-0 bg-black"
                style={{ opacity: 0.45, zIndex: 2 }}
              />
              {/* Category title */}
              <div className="relative z-10 flex-1 flex flex-col items-center justify-center">
                <div className="text-4xl font-bold text-white drop-shadow-lg">{item.title}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}