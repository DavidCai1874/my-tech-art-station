import unrealIssues from "./TS_Unreal.js";
import { Link } from "react-router-dom";

export default function TSUnreal() {
  // sort issues by date, latest first
  const sortedIssues = unrealIssues.slice().sort((a, b) => (b.date > a.date ? 1 : -1));

  return (
    <div className="max-w-7xl mx-auto py-12">
      {/* Page title */}
      <h1 className="text-3xl font-bold mb-6">Unreal Engine Trouble Shooting</h1>
      {/* Grid layout for issues, 2 columns per row */}
      <div className="grid grid-cols-2 gap-8">
        {sortedIssues.map(issue => (
          <div key={issue.id} className="bg-white rounded-xl shadow border p-6 flex flex-col">
            {/* Title can link to details */}
            <h2 className="text-xl font-bold mb-2">
              <Link
                to={issue.id}
                style={{ textDecoration: "none" }}
              >
                {issue.title}
              </Link>
            </h2>
            {/* Issue ID and date in the same row */}
            <div className="flex justify-between items-center text-xl text-gray-500 mb-4">
              <span>#{issue.id.toUpperCase()}</span>
              <span className="text-sm text-gray-400">{issue.date}</span>
            </div>
            {/* Addon image */}
            {issue.image && (
              <Link
                to={issue.id}
                style={{ display: "block" }}
              >
                <img
                  src={issue.image}
                  className="w-full h-40 object-cover mb-4"
                />
              </Link>
            )}
            {/* View details button */}
            <Link
              to={issue.id}
              className="mt-auto px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800 text-center"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}