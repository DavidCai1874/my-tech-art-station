import { useParams, useNavigate } from "react-router-dom";
import blenderAddons from "./Addon_Blender.js";
import ReactMarkdown from "react-markdown";

export default function BlenderDetail() {
  // get the addon ID from the URL parameters
  const { addonId } = useParams();
  const navigate = useNavigate();
  // find the addon article data by ID
  const addon = blenderAddons.find(a => a.id === addonId);
  // if not found, show a message
  if (!addon) return <div style={{padding:32}}>Addon not found.</div>;

  // get all unique tags from the Blender addons list
  const allTags = Array.from(new Set(blenderAddons.flatMap(a => a.tags)));

  // when a tag is clicked, navigate to the filtered tag page
  const handleTagClick = (tag) => {
    navigate(`/addons/blender/tag/${tag}`);
  };

  return (
    <div className="bg-white rounded-xl shadow border p-8 max-w-4xl mx-auto my-12">
      {/* Addon name */}
      <h2 className="text-2xl font-bold mb-4">{addon.name}</h2>
      {/* Addon ID and date */}
      <div className="flex justify-between items-center text-xl text-gray-500 mb-4 ">
        <span>#{addon.id.toUpperCase()}</span>
        <span className="text-sm text-gray-400">{addon.date}</span>
      </div>
      {/* Tag buttons for filtering */}
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
      {/* Render markdown content, skipping the first 4 lines: title, id, date, tags */}
      <div className="markdown-body">
        <ReactMarkdown>
          {addon.md.split("\n").slice(4).join("\n")}
        </ReactMarkdown>
      </div>
    </div>
  );
}