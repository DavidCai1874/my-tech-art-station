import pipelineIssues from "./TS_Pipeline.js";
import { Link } from "react-router-dom";

export default function TSPipeline() {
  return (
    <div className="max-w-7xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">Pipeline Trouble Shooting</h1>
      <div className="grid grid-cols-3 gap-8">
        {pipelineIssues.map(issue => (
          <div key={issue.id} className="bg-white rounded-xl shadow border p-6 flex flex-col">
            <h2 className="text-xl font-bold mb-2">
              <Link
                to={`/troubleshooting/pipeline/${issue.id}`}
                style={{ textDecoration: "none" }}
              >
                {issue.title}
              </Link>
            </h2>
            <div className="text-xl text-gray-500 mb-4 ">#{issue.id.toUpperCase()}</div>
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