import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white flex space-x-4 w-full fixed top-0 left-0 z-50">
      <Link to="/">Home</Link>
      <Link to="/addons">Addons</Link>
      <Link to="/troubleshooting">Trouble Shooting</Link>
      <Link to="/workingon">Working On</Link>
      <Link to="/classprogress">Class Progress</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}