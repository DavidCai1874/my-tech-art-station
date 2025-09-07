import { useState } from "react";
import mayaAddons from "./Addon_maya.js";
import { Link, useParams, useNavigate } from "react-router-dom";

const allTags = Array.from(new Set(mayaAddons.flatMap(a => a.tags)));



export default function AddonMaya() {
  const { tag } = useParams();
  const navigate = useNavigate();
  const [filter, setFilter] = useState(tag || null);

  // 点击 tag 时自动跳转到带 tag 的路由
  const handleTagClick = (t) => {
    setFilter(t);
    navigate(t ? `/addons/maya/tag/${t}` : "/addons/maya");
  };

  const filteredAddons = filter
    ? mayaAddons.filter(a => a.tags.includes(filter))
    : mayaAddons;

  return (
    <div className="max-w-7xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">Maya Addons</h1>
      <div className="mb-8 flex flex-wrap gap-4">
        <span className="font-semibold">Tags:</span>
        <button
          className={`px-3 py-1 rounded-full border ${!filter ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700"} hover:bg-blue-100`}
          onClick={() => handleTagClick(null)}
        >
          All
        </button>
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
      <div className="grid grid-cols-3 gap-8">
        {filteredAddons.map(addon => (
          <div key={addon.id} className="bg-white rounded-xl shadow border p-6 flex flex-col">
            <h2 className="text-xl font-bold mb-2">{addon.name}</h2>
            <div className="mb-2 text-sm text-gray-500">
              {addon.tags.map(tag => (
                <span key={tag} className="inline-block mr-2 px-2 py-0.5 rounded bg-gray-100 text-gray-700">{tag}</span>
              ))}
            </div>
            <p className="mb-4 text-gray-700">{addon.description}</p>
            <Link
              to={`/addons/maya/${addon.id}`}
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