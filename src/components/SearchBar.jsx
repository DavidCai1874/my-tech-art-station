import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [index, setIndex] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef();

  useEffect(() => {
    fetch('/my-tech-art-station/searchIndex.json')
      .then(res => res.json())
      .then(data => {
        console.log('Loaded index:', data);
        setIndex(data);
      });
  }, []);

  const results = searchTerm
  ? index.filter(item => {
      console.log('compare:', item.title, searchTerm);
      return String(item.title).toLowerCase().includes(searchTerm.trim().toLowerCase());
    })
  : [];
console.log('results:', results);

  const handleSearch = (e) => {
    e.preventDefault?.();
    setShowDropdown(true);
  };

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
    <div className="relative w-full max-w-2xl" ref={dropdownRef}>
      <form
        className="flex"
        onSubmit={handleSearch}
        autoComplete="off"
      >
        <input
          type="text"
          placeholder="Type to search..."
          value={searchTerm}
          onChange={e => {
            console.log('input:', e.target.value);
            setSearchTerm(e.target.value);
            setShowDropdown(true);
          }}
          className="flex-1 px-3 py-1 rounded-l bg-gray-700 text-white focus:outline-none"
        />
        <button
          type="submit"
          className="px-4 py-1 rounded-r bg-blue-600 text-white hover:bg-blue-700"
        >
          Search
        </button>
      </form>
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
              {item.title}
            </li>
          ))}
        </ul>
      )}
      {showDropdown && searchTerm && results.length === 0 && (
        <div className="absolute left-0 right-0 bg-white text-gray-500 rounded shadow mt-1 px-4 py-2 z-50">
          Nothing found for "{searchTerm}"
        </div>
      )}
    </div>
  );
}