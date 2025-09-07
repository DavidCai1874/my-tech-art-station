import unrealIssues from "./TS_Unreal.js";
import { Link } from "react-router-dom";

export default function TSUnreal() {
  return (
    <div className="max-w-7xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">Unreal Engine Trouble Shooting</h1>
      <div className="grid grid-cols-3 gap-8">
        {unrealIssues.map(issue => (
          <div key={issue.id} className="bg-white rounded-xl shadow border p-6 flex flex-col">
            <h2 className="text-xl font-bold mb-2">{issue.name}</h2>
            <p className="mb-4 text-gray-700">{issue.description}</p>
            <Link
              to={issue.id}
              className="mt-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-center"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}