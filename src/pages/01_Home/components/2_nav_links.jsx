import { Link } from 'react-router-dom';

const navItems = [
  { to: '/addons', label: 'Addons & Plugins' },
  { to: '/troubleshooting', label: 'Trouble Shooting' },
  { to: '/workingon', label: 'Working On' },
  { to: '/classprogress', label: 'Class Progress' },
];

export default function NavLinks() {
  return (
    <div className="w-full mx-auto my-12">
      <div className="text-2xl font-bold text-gray-800 mb-6 text-left">
        Go to a Section
      </div>
      <div className="grid grid-cols-2 gap-8">
        {navItems.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className="flex items-center justify-center rounded-xl bg-gray-700 h-56 text-white text-2xl font-bold shadow-md hover:bg-gray-600 transition"
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}