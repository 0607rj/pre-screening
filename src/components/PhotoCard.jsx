export default function PhotoCard({ photo, isFavourite, onToggle, index }) {
  return (
    <div
      className={`group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 animate-fade-in stagger-${(index % 8) + 1}`}
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={`https://picsum.photos/id/${photo.id}/400/300`}
          alt={`Photo by ${photo.author}`}
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
          loading="lazy"
        />


        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <button
          onClick={() => onToggle(photo.id)}
          aria-label={isFavourite ? 'Remove from favourites' : 'Add to favourites'}
          className={`absolute top-3 right-3 w-9 h-9 flex items-center justify-center rounded-full transition-all duration-300 focus:outline-none ${
            isFavourite
              ? 'bg-white shadow-lg scale-100'
              : 'bg-white/70 backdrop-blur-sm shadow-md opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100'
          }`}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill={isFavourite ? '#e11d48' : 'none'}
            stroke={isFavourite ? '#e11d48' : '#6b7280'}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-all duration-300 ${isFavourite ? 'scale-110' : 'group-hover:stroke-gray-700'}`}
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>


        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-white text-sm font-medium truncate">{photo.author}</p>
        </div>
      </div>

      <div className="px-4 py-3 flex items-center justify-between">
        <div className="min-w-0">
          <p className="text-sm font-medium text-gray-800 truncate">{photo.author}</p>
          <p className="text-xs text-gray-400">#{photo.id}</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center shrink-0 group-hover:bg-[#1a1a2e]/5 transition-colors duration-300">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-[#1a1a2e] transition-colors duration-300">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21 15 16 10 5 21"/>
          </svg>
        </div>
      </div>
    </div>
  );
}
