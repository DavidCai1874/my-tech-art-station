import { useState } from "react";
import generalAddons from "./Addon_General.js";
import { Link, useParams, useNavigate } from "react-router-dom";

// Get all unique tags from the General addons list
const allTags = Array.from(new Set(generalAddons.flatMap(a => a.tags)));

export default function AddonGeneral() {
  // Get the current tag from the URL parameters
  const { tag } = useParams();
  // React Router navigation hook
  const navigate = useNavigate();
  // State for the currently selected tag filter
  const [filter, setFilter] = useState(tag || null);

  // When a tag is clicked, update filter and navigate to the corresponding route
  const handleTagClick = (t) => {
    setFilter(t);
    navigate(t ? `/addons/general/tag/${t}` : "/addons/general");
  };

  // Filter and sort the addons list by the selected tag, or show all if no filter
  const filteredAddons = (
    filter
      ? generalAddons.filter(a => a.tags.includes(filter))
      : generalAddons
  ).slice().sort((a, b) => {
    const cmp = b.date.localeCompare(a.date);
    if (cmp !== 0) return cmp;
    return a.id.localeCompare(b.id); // same date, sort by id
  });

  return (
    <div className="max-w-7xl mx-auto py-12">
      {/* Page title */}
      <h1 className="text-3xl font-bold mb-6">General Addons</h1>
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
                to={addon.githubDoc}
                style={{ textDecoration: "none" }}
                target="_blank"
                rel="noopener noreferrer"
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
            {/* Addon image */}
            {addon.image && (
              <a
                href={addon.githubDoc}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "block" }}
              >
                <img
                  src={addon.image}
                  className="w-full h-40 object-cover mb-4"
                />
              </a>
            )}
            {/* Button to view details */}
            <Link
              to={addon.githubDoc}
              style={{ textDecoration: "none" }}
              className="mt-auto px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800 text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Details on GitHub
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}