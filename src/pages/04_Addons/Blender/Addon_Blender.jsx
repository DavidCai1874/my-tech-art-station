import { useState } from "react";
import blenderAddons from "./Addon_Blender.js";
import { Link, useParams, useNavigate } from "react-router-dom";

// Get all unique tags from the Blender addons list
const allTags = Array.from(new Set(blenderAddons.flatMap(a => a.tags)));

export default function AddonBlender() {
  // Get the current tag from the URL parameters
  const { tag } = useParams();
  // React Router navigation hook
  const navigate = useNavigate();
  // State for the currently selected tag filter
  const [filter, setFilter] = useState(tag || null);

  // When a tag is clicked, update filter and navigate to the corresponding route
  const handleTagClick = (t) => {
    setFilter(t);
    navigate(t ? `/addons/blender/tag/${t}` : "/addons/blender");
  };

  // Filter and sort the addons list by the selected tag, or show all if no filter
  const filteredAddons = (
    filter
      ? blenderAddons.filter(a => a.tags.includes(filter))
      : blenderAddons
  ).slice().sort((a, b) => {
    const cmp = b.date.localeCompare(a.date);
    if (cmp !== 0) return cmp;
    return a.id.localeCompare(b.id); // same date, sort by id
  });

  return (
    <div className="max-w-7xl mx-auto py-12">
      {/* Page title */}
      <h1 className="text-3xl font-bold mb-6">Blender Addons</h1>
      {/* Tag filter bar */}
      <div className="mb-8 flex flex-wrap gap-4">
        <span className="font-semibold">Tags:</span>
        {/* Button to show all addons */}
        <button
          className={`px-3 py-1 rounded-full border ${!filter ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700"} hover:bg-blue-100`}
          onClick={() => handleTagClick(null)}
        >
          All
        </button>
        {/* Buttons for each tag */}
        {allTags.map(tag => (
          <button
            key={tag}
            className={`px-3 py-1 rounded-full border ${filter === tag ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700"} hover:bg-blue-100`}
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      {/* Addons grid */}
      <div className="grid grid-cols-3 gap-8">
        {filteredAddons.map(addon => (
          <div key={addon.id} className="bg-white rounded-xl shadow border p-6 flex flex-col">
            {/* Addon name with link to details */}
            <h2 className="text-xl font-bold mb-2">
              <Link
                to={`/addons/blender/${addon.id}`}
                style={{ textDecoration: "none" }}
              >
                {addon.name}
              </Link>
            </h2>
            {/* Addon ID and date */}
            <div className="flex justify-between items-center text-xl text-gray-500 mb-2">
              <span>#{addon.id.toUpperCase()}</span>
              <span className="text-sm text-gray-400">{addon.date}</span>
            </div>
            {/* Addon tags */}
            <div className="mb-4 text-sm text-gray-500">
              {addon.tags.map(tag => (
                <span key={tag} className="inline-block mr-2 px-2 py-0.5 rounded bg-gray-100 text-gray-700">{tag}</span>
              ))}
            </div>
            {/* Button to view details */}
            <Link
              to={`/addons/blender/${addon.id}`}
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