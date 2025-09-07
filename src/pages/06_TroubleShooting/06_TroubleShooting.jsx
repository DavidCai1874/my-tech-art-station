import { Link } from 'react-router-dom';

import mayaImg from "./maya_cover.png";
import blenderImg from "./blender_cover.png";
import unrealImg from "./unreal_cover.png"; // 你需要准备一张 Unreal Engine 的图片

const list = [
  //{ to: "blender", img: blenderImg, title: "Blender" },
  { to: "maya", img: mayaImg, title: "Maya" },
  { to: "unreal", img: unrealImg, title: "Unreal Engine" },
];

export default function TroubleShooting() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="w-[90%] max-w-7xl flex flex-col items-start">
        <h1 className="text-3xl font-bold mt-14 mb-8 ml-2">TroubleShooting</h1>
        <div className="flex gap-20 w-full mt-10">
          {list.map(item => (
            <Link
              key={item.title}
              to={item.to}
              className="flex-1 h-[15rem] flex flex-col rounded-2xl overflow-hidden relative shadow-md border hover:scale-101 transition-transform duration-200"
            >
              <img
                src={item.img}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ zIndex: 1 }}
              />
              <div
                className="absolute inset-0 bg-black"
                style={{ opacity: 0.4, zIndex: 2 }}
              />
              <div className="relative z-10 flex-1 flex flex-col items-center justify-center">
                <div className="text-3xl font-bold text-white drop-shadow-lg">{item.title}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}