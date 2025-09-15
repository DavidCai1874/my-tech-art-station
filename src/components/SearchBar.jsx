import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

// search bar component
export default function SearchBar() {
  // state for search input value
  const [searchTerm, setSearchTerm] = useState('');
  // state for loaded search index data
  const [index, setIndex] = useState([]);
  // state for dropdown visibility
  const [showDropdown, setShowDropdown] = useState(false);
  // navigation hook
  const navigate = useNavigate();
  // ref for dropdown container
  const dropdownRef = useRef();

  // fetch search index data on mount
  useEffect(() => {
    fetch('/my-tech-art-station/searchIndex.json')
      .then(res => res.json())
      .then(data => {
        setIndex(data);
      });
  }, []);

  // filter results by search term (search both title and id)
  const results = searchTerm
    ? index.filter(item =>
        String(item.title).toLowerCase().includes(searchTerm.trim().toLowerCase()) ||
        (item.id && String(item.id).toLowerCase().includes(searchTerm.trim().toLowerCase()))
      )
    : [];

  // handle search submit
  const handleSearch = (e) => {
    e.preventDefault?.();
    setShowDropdown(true);
  };

  // close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    // search bar container
    <div className="relative w-full max-w-2xl" ref={dropdownRef}>
      <form
        className="flex"
        onSubmit={handleSearch}
        autoComplete="off"
      >
        {/* search input */}
        <input
          type="text"
          placeholder="Type to search..."
          value={searchTerm}
          onChange={e => {
            setSearchTerm(e.target.value);
            setShowDropdown(true);
          }}
          className="flex-1 px-3 py-1 rounded-l bg-gray-700 text-white focus:outline-none"
        />
      </form>
      {/* dropdown with results */}
      {showDropdown && results.length > 0 && (
        <ul className="absolute left-0 right-0 bg-white text-black rounded shadow mt-1 max-h-60 overflow-y-auto z-50">
          {results.map(item => (
            <li
              key={item.path}
              className="px-4 py-2 cursor-pointer hover:bg-blue-100"
              onMouseDown={() => {
                navigate(item.path);
                setShowDropdown(false);
                setSearchTerm('');
              }}
            >
              {/* show title */}
              <div>{item.title}</div>
              {/* show id if exists */}
              {item.id && (
                <div className="text-xs text-gray-500">{item.id}</div>
              )}
            </li>
          ))}
        </ul>
      )}
      {/* dropdown with no results */}
      {showDropdown && searchTerm && results.length === 0 && (
        <div className="absolute left-0 right-0 bg-white text-gray-500 rounded shadow mt-1 px-4 py-2 z-50">
          Nothing found for "{searchTerm}"
        </div>
      )}
    </div>
  );
}