export default function SearchBar({ value, onChange, resultCount, total }) {
  return (
    <div className="mb-6">
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-base">
          🔍
        </span>

        <input
          type="text"
          placeholder="Search by photo ID (e.g. 10) or author name…"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full pl-10 pr-10 py-3 border border-gray-200 rounded-xl bg-white shadow-sm text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition"
        />

        {value && (
          <button
            onClick={() => onChange('')}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none text-sm font-bold leading-none"
          >
            ✕
          </button>
        )}
      </div>

      {value && (
        <p className="text-xs text-gray-400 mt-1.5 ml-1">
          {resultCount} of {total} photos match
        </p>
      )}
    </div>
  );
}
