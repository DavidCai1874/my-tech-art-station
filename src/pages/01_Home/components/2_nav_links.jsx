import { Link } from 'react-router-dom';

import toolsImg from './02_tools_cover.png';
import troubleShootingImg from './02_troubleshooting_cover.png';
import wip from './02_wip_cover.png';
import weeklyLogImg from './02_weeklylog_cover.png';

const navItems = [
  { to: '/addons', label: 'Addons & Plugins', img: toolsImg },
  { to: '/troubleshooting', label: 'TroubleShooting', img: troubleShootingImg },
  { to: '/workinprogress', label: 'Work In Progress', img: wip },
  { to: '/weeklylog', label: 'Weekly Log', img: weeklyLogImg },
];

export default function NavLinks() {
  return (
    <div className="w-full mx-auto my-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-left">
        Go to a Section
      </h2>
      <div className="grid grid-cols-2 gap-8">
        {navItems.map(({ to, label, img }) => (
          <Link
            key={to}
            to={to}
            className="flex flex-col items-center justify-center rounded-xl bg-gray-700 h-56 text-white text-2xl font-bold shadow-md hover:bg-gray-600 transition transform hover:scale-101 relative overflow-hidden"
            style={{ position: 'relative' }}
          >
            <img
              src={img}
              alt={label}
              className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none"
              style={{ zIndex: 0 }}
            />
            <span className="relative z-10">{label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}