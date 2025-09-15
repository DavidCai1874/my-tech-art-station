import { Link } from 'react-router-dom';
import updates from '../../00_Updates/_updates.js';

export default function UpdatesSection() {
  const latestUpdates = updates.slice(0, 10);

  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-4">Latest Updates</h2>
      <div className="max-h-64 overflow-y-auto">
        <ul className="pl-0">
          {latestUpdates.map((item, idx) => (
            <li key={item.date} className="list-none">
              <div className="flex items-center py-2">
                <span className="text-gray-500 text-sm flex-shrink-0 w-28 text-center">{item.date}</span>
                <span className="ml-4 flex-1 break-words">{item.text}</span>
              </div>
              {idx !== latestUpdates.length - 1 && (
                <div className="border-b border-gray-300" />
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4 text-right">
        <Link
          to="/updates"
          className="text-blue-500 underline hover:text-blue-700 font-semibold"
        >
          View all updates &rarr;
        </Link>
      </div>
    </section>
  );
}