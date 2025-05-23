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
        {/* 左侧大导航 */}
        <div className="flex space-x-8 text-xl font-bold">
          <Link to="/" className="whitespace-nowrap">Home</Link>
          <Link to="/addons" className="whitespace-nowrap">Addons</Link>
          <Link to="/troubleshooting" className="whitespace-nowrap">Trouble Shooting</Link>
          <Link to="/workingon" className="whitespace-nowrap">Working On</Link>
          <Link to="/classprogress" className="whitespace-nowrap">Class Progress</Link>
        </div>
        {/* 中间空白占位 */}
        <div className="flex-1" />
        {/* 右侧只剩下 About */}
        <div className="flex items-center text-xl font-bold">
          <Link to="/about" className="whitespace-nowrap">About</Link>
        </div>
      </div>
    </nav>
  );
}