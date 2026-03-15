import PhotoCard from './PhotoCard';

export default function Gallery({ photos, favouriteIds, onToggleFavourite }) {
  if (photos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-28 text-center animate-fade-in">
        <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-6">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            <line x1="8" y1="11" x2="14" y2="11"/>
          </svg>
        </div>
        <p className="text-gray-800 text-lg font-semibold mb-1">No photos found</p>
        <p className="text-gray-400 text-sm max-w-xs">Try searching with a different author name or photo ID</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {photos.map((photo, index) => (
        <PhotoCard
          key={photo.id}
          photo={photo}
          isFavourite={favouriteIds.includes(photo.id)}
          onToggle={onToggleFavourite}
          index={index}
        />
      ))}
    </div>
  );
}
