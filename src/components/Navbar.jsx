import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import './Navbar.css';

export default function Navbar() {
  // show/hide state for navbar
  const [show, setShow] = useState(true);
  // track last scroll position
  const lastScroll = useRef(window.scrollY);

  // handle scroll to show/hide navbar
  useEffect(() => {
    function onScroll() {
      const current = window.scrollY;
      if (current > 50) {
        // hide navbar when scrolling down, show when scrolling up
        if (current > lastScroll.current) {
          setShow(false);
        } else {
          setShow(true);
        }
      } else {
        // always show navbar near top
        setShow(true);
      }
      lastScroll.current = current;
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav className={`my-navbar ${show ? 'show' : 'hide'}`}>
      <div className="flex items-center">

        {/* Left side nav space 10 ml 3*/}
        <div className="flex space-x-13 text-xl font-bold ml-6">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>

        {/* Searching bar */}
        <div className="flex-1 flex justify-center px-8">
          <SearchBar />
        </div>
        
        {/* Right side nav mr 2 */}
        <div className="flex items-center space-x-10 text-xl font-bold mr-5">
          <Link to="/addons">Addons</Link>
          <Link to="/troubleshooting">TroubleShooting</Link>
          <Link to="/weeklylog">Weekly Log</Link>
        </div>
        
      </div>

    </nav>
  );
}