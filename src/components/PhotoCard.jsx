export default function PhotoCard({ photo, isFavourite, onToggle }) {
  return (
    <div className="group bg-white rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300">
      <div className="relative overflow-hidden">
        <img
          src={`https://picsum.photos/id/${photo.id}/400/300`}
          alt={`Photo by ${photo.author}`}
          className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <button
          onClick={() => onToggle(photo.id)}
          aria-label={isFavourite ? 'Remove from favourites' : 'Add to favourites'}
          className="absolute top-2 right-2 w-9 h-9 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm shadow-md hover:scale-110 transition-transform duration-200 focus:outline-none"
        >
          {isFavourite ? '❤️' : '🤍'}
        </button>
      </div>

      <div className="px-4 py-3 flex flex-col gap-0.5">
        <p className="text-sm font-bold text-gray-800">Photo #{photo.id}</p>
        <p className="text-xs text-gray-400 truncate">by {photo.author}</p>
      </div>
    </div>
  );
}
