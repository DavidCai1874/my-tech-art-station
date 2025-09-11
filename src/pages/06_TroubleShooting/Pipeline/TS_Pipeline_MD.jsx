import React from "react";
import { useParams } from "react-router-dom";
import pipelineIssues from "./TS_Pipeline.js";
import ReactMarkdown from "react-markdown";

export default function TroubleShootingDetail() {
  const { issueId } = useParams();
  const issue = pipelineIssues.find(a => a.id === issueId);
  if (!issue) return <div style={{padding:32}}>Issue not found.</div>;

  return (
    <div className="bg-white rounded-xl shadow border p-8 max-w-4xl mx-auto my-12">
      <h2 className="text-2xl font-bold mb-4">{issue.title}</h2>
      <div className="text-xl text-gray-500 mb-4 ">#{issue.id.toUpperCase()}</div>
      <div className="markdown-body">
        <ReactMarkdown>
          {issue.md.split("\n").slice(2).join("\n")}
        </ReactMarkdown>
      </div>
    </div>
  );
}