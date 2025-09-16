import { Link } from 'react-router-dom';

// Import cover images for each addon category
import mayaImg from "./maya_cover.png";
import blenderImg from "./blender_cover.png";
import generalImg from "./general_cover.png";

// List of addon categories
const list = [
  {
    to: "maya",
    img: mayaImg,
    title: "Maya",
    desc: (
      <>
        Scripts and tools for Autodesk Maya.<br />
        Python, MEL, or C++.
      </>
    )
  },
  {
    to: "blender",
    img: blenderImg,
    title: "Blender",
    desc: (
      <>
        Addons and scripts for Blender.<br />
        Python only.<br />
      </>
    )
  },
  {
    to: "general",
    img: generalImg,
    title: "General",
    desc: (
      <>
        General-purpose scripts and utilities.<br />
        Mainly Python.
      </>
    )
  },
];

// Main Addons page component
export default function Addons() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="w-[90%] max-w-7xl flex flex-col items-start">
        {/* Page title */}
        <h1 className="text-3xl font-bold mt-14 mb-2 ml-2">Addons</h1>
        {/* Page subtitle*/}
        <p className="text-sm text-gray-600 ml-2 mb-6">
          How do you fly a plane? Get on the plane, find your destination, and... fly!<br/>
          Same for addons. Choose your DCC, find an addon that fits your needs, and use it to boost your productivity!
        </p>
        {/* Addon category cards */}
        <div className="flex gap-20 w-full mt-10">
          {list.map(item => (
            <Link
              key={item.title}
              to={item.to}
              className="flex-1 h-[24rem] flex flex-col rounded-2xl bg-white border shadow-md hover:bg-blue-100 hover:scale-105 transition-transform duration-200 font-semibold text-2xl overflow-hidden"
            >
              {/* Category cover image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-56 object-cover rounded-t-2xl"
              />
              {/* Category title and description */}
              <div className="flex-1 flex flex-col items-center justify-center px-4 py-6">
                <div className="text-2xl font-bold mb-2">{item.title}</div>
                <div className="text-base font-normal text-gray-700 text-center">
                  {item.desc}
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/* Suggestion box for user feedback */}
        <div className="w-full flex flex-col items-center mt-16">
          <div className="bg-white rounded-xl shadow border p-6 w-full max-w-2xl">
            <p className="text-lg text-gray-600 mb-0 text-center">
              Have an addon idea or any suggestions? Go to&nbsp;
              <Link to="/about" className="text-blue-600 underline hover:text-blue-800 font-semibold">
                About
              </Link>
              &nbsp;and send me an email!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}