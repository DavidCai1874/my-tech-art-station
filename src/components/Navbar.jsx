import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import './Navbar.css';

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
    <nav className={`my-navbar ${show ? 'show' : 'hide'}`}>
      <div className="flex items-center">

        {/* left side nav space 10 ml 3*/}
        <div className="flex space-x-10 text-xl font-bold ml-6">
          <Link to="/">Home</Link>
      {/* <Link to="/gallery">Gallery</Link>
          <Link to="/playground">Playground</Link> */}
          <Link to="/workinprogress">Work In Progress</Link>
          <Link to="/about">About</Link>
        </div>

        {/* searching bar */}
        <div className="flex-1 flex justify-center px-8">
          <SearchBar />
        </div>
        {/* right side nav mr 2 */}
        <div className="flex items-center space-x-10 text-xl font-bold mr-5">
          <Link to="/addons">Addons</Link>
          <Link to="/troubleshooting">TroubleShooting</Link>

          <Link to="/weeklylog">Weekly Log</Link>
        </div>
        
      </div>

    </nav>
  );
}