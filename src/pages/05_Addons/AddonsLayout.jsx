import React from "react";
import { Link, useParams } from "react-router-dom";
import mayaAddons from "./addon_maya.js";

const allTags = Array.from(new Set(mayaAddons.flatMap(a => a.tags)));

export default function AddonsLayout({ children }) {
  const { tag } = useParams();

  return (
    <div className="flex w-full mx-auto p-8 gap-8">
      {/* left side gap */}
      <div className="basis-1/8 grow-0 shrink-0" />
      {/* left side tags */}
      <div className="w-1/5">
        <div className="bg-gray-50 rounded-lg shadow-lg p-8 sticky top-24">
          <h2 className="text-xl font-bold mb-4">Maya Addons</h2>
          <ul className="space-y-2">
            <li>
              <Link
                to="../maya"
                className={`block px-2 py-1 rounded transition ${
                  !tag
                    ? "bg-blue-100 font-bold text-blue-700"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                Maya (All)
              </Link>
            </li>
            <hr className="border-t border-gray-200 my-2" />
            {allTags.map(t => (
              <React.Fragment key={t}>
                <li>
                  <Link
                    to={`../maya/tag/${t}`}
                    className={`block px-2 py-1 rounded transition ${
                      tag === t
                        ? "bg-blue-100 font-bold text-blue-700"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {t}
                  </Link>
                </li>
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
      {/* right side */}
      <div className="w-4/5 bg-white rounded-lg shadow-lg p-8">
        {children}
      </div>
      {/* right side gap */}
      <div className="basis-1/8 grow-0 shrink-0" />
    </div>
  );
}