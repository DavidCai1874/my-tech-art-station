import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [show, setShow] = useState(true);
  const lastScroll = useRef(window.scrollY);

  useEffect(() => {
    function onScroll() {
      const current = window.scrollY;
      if (current > 50) {
        if (current > lastScroll.current) {
          setShow(false);
        } else {
          setShow(true);
        }
      } else {
        setShow(true);
      }
      lastScroll.current = current;
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`bg-gray-800 p-4 text-white w-full fixed top-0 left-0 z-50 transition-transform duration-300 ${
        show ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="flex items-center">
        {/* 左侧导航 */}
        <div className="flex space-x-8 text-xl font-bold">
          <Link to="/" className="whitespace-nowrap">Home</Link>
          <Link to="/contribute" className="whitespace-nowrap">Contribute</Link>
          <Link to="/playground" className="whitespace-nowrap">Playground</Link>
          <Link to="/about" className="whitespace-nowrap">About</Link>
        </div>
        {/* 中间搜索栏，顶满空白 */}
        <div className="flex-1 flex justify-center px-8">
          <input
            type="text"
            placeholder="Search..."
            className="w-full max-w-2xl px-3 py-1 rounded bg-gray-700 text-white focus:outline-none"
          />
        </div>
        {/* 右侧导航 */}
        {/* 右侧导航 */}
        <div className="flex items-center space-x-6 text-xl font-bold">
          <Link to="/addons" className="whitespace-nowrap">Addons</Link>
          <Link to="/troubleshooting" className="whitespace-nowrap">TroubleShooting</Link>
          <Link to="/workinprogress" className="whitespace-nowrap">Work In Progress</Link>
          <Link to="/weeklylog" className="whitespace-nowrap">Weekly Log</Link>
          <Link to="/gallery" className="whitespace-nowrap">Gallery</Link>
        </div>
      </div>
    </nav>
  );
}