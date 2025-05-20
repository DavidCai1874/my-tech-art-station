import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome!</h1>
      <div className="mb-6">
        <img src="/your-welcome-image.jpg" alt="Welcome" className="mb-4" />
        <p>Check out my recent works and logs below:</p>
        {/* 这里可以放你的 recent works 列表 */}
      </div>
      <div className="flex space-x-4">
        <Link to="/addons" className="text-blue-500 underline">Addons & Plugins</Link>
        <Link to="/troubleshooting" className="text-blue-500 underline">Trouble Shooting</Link>
        <Link to="/workingon" className="text-blue-500 underline">Working On</Link>
        <Link to="/classprogress" className="text-blue-500 underline">Class Progress</Link>
        <Link to="/about" className="text-blue-500 underline">About Me</Link>
      </div>
    </div>
  );
}