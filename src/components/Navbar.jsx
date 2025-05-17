import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white flex space-x-4">
      <Link to="/">Main Page</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}
