import PhotoCard from './PhotoCard';

export default function Gallery({ photos, favouriteIds, onToggleFavourite }) {
  if (photos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <span className="text-5xl mb-4">🔎</span>
        <p className="text-gray-500 text-lg font-medium">No photos found</p>
        <p className="text-gray-400 text-sm mt-1">Try a different author name or photo ID</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {photos.map((photo) => (
        <PhotoCard
          key={photo.id}
          photo={photo}
          isFavourite={favouriteIds.includes(photo.id)}
          onToggle={onToggleFavourite}
        />
      ))}
    </div>
  );
}
