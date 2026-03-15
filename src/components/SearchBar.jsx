export default function SearchBar({ value, onChange, resultCount, total }) {
  return (
    <div className="mb-8">
      <div className="relative max-w-xl">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
        </span>

        <input
          type="text"
          placeholder="Search by author or photo ID..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full pl-12 pr-12 py-3.5 border border-gray-200 rounded-2xl bg-white text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1a1a2e]/10 focus:border-[#1a1a2e]/30 transition-all duration-200 shadow-sm hover:shadow-md hover:border-gray-300"
        />

        {value && (
          <button
            onClick={() => onChange('')}
            aria-label="Clear search"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-400 hover:text-gray-600 focus:outline-none"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        )}
      </div>

      {value && (
        <p className="text-xs text-gray-400 mt-2.5 ml-1 font-medium">
          Showing <span className="text-[#1a1a2e]">{resultCount}</span> of {total} photos
        </p>
      )}
    </div>
  );
}
