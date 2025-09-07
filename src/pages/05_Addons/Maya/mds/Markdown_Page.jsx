import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import mayaAddons from "../Addon_maya.js";
import ReactMarkdown from "react-markdown";

export default function MayaDetail() {
  const { addonId } = useParams();
  const navigate = useNavigate();
  const addon = mayaAddons.find(a => a.id === addonId);
  if (!addon) return <div style={{padding:32}}>Addon not found.</div>;

  // 所有 tags
  const allTags = Array.from(new Set(mayaAddons.flatMap(a => a.tags)));

  // 点击 tag 跳转到筛选页面
  const handleTagClick = (tag) => {
    navigate(`/addons/maya/tag/${tag}`);
  };

  return (
    <div className="bg-white rounded-xl shadow border p-8 max-w-4xl mx-auto my-12">
      <h2 className="text-2xl font-bold mb-4">{addon.name}</h2>
      <div className="mb-4 flex flex-wrap gap-2">
        {addon.tags.map(tag => (
          <button
            key={tag}
            className="px-3 py-1 rounded-full border bg-gray-100 text-gray-700 hover:bg-blue-100 transition"
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      <p className="mb-6 text-gray-700">{addon.description}</p>
      <div className="markdown-body">
        <ReactMarkdown>{addon.md}</ReactMarkdown>
      </div>
    </div>
  );
}