import React from "react";
import { useParams } from "react-router-dom";
import unrealIssues from "./TS_Unreal.js";
import ReactMarkdown from "react-markdown";

export default function TroubleShootingDetail() {
  const { issueId } = useParams();
  const issue = unrealIssues.find(a => a.id === issueId);
  if (!issue) return <div style={{padding:32}}>Issue not found.</div>;

  return (
    <div className="bg-white rounded-xl shadow border p-8 max-w-4xl mx-auto my-12">
      <h2 className="text-2xl font-bold mb-4">{issue.name}</h2>
      <p className="mb-6 text-gray-700">{issue.description}</p>
      <div className="markdown-body">
        <ReactMarkdown>{issue.md}</ReactMarkdown>
      </div>
    </div>
  );
}