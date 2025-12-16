import { useParams } from "react-router-dom";
import pipelineIssues from "./TS_Maya.js";
import ReactMarkdown from "react-markdown";

export default function TroubleShootingDetail() {
  // get the issue ID from the URL parameters
  const { issueId } = useParams();
  // find the issue data by ID
  const issue = pipelineIssues.find(a => a.id === issueId);
  // if not found
  if (!issue) return <div style={{padding:32}}>Issue not found.</div>;

  return (
    <div className="bg-white rounded-xl shadow border p-8 max-w-4xl mx-auto my-12">
      {/* Issue title */}
      <h2 className="text-2xl font-bold mb-4">{issue.title}</h2>
      {/* Issue ID and date in the same row */}
      <div className="flex justify-between items-center text-xl text-gray-500 mb-4">
        <span>#{issue.id.toUpperCase()}</span>
        <span className="text-sm text-gray-400">{issue.date}</span>
      </div>
      {/* Render markdown content, skipping the first 3 lines: title, id, date */}
      <div className="markdown-body">
        <ReactMarkdown>
          {issue.md.split("\n").slice(3).join("\n")}
        </ReactMarkdown>
      </div>
    </div>
  );
}