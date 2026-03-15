import { useState, useReducer, useCallback, useMemo } from 'react';
import { useFetchPhotos } from './hooks/useFetchPhotos';
import { favouritesReducer, loadFavourites } from './reducers/favouritesReducer';
import SearchBar from './components/SearchBar';
import Gallery from './components/Gallery';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  const { photos, loading, error } = useFetchPhotos();

  const [favouriteIds, dispatch] = useReducer(
    favouritesReducer,
    null,
    loadFavourites,
  );

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = useCallback((value) => {
    setSearchQuery(value);
  }, []);

  const handleToggleFavourite = useCallback((id) => {
    dispatch({ type: 'TOGGLE_FAVOURITE', payload: id });
  }, []);

  const filteredPhotos = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return photos;
    return photos.filter(
      (p) =>
        p.author.toLowerCase().includes(q) ||
        String(p.id).includes(q),
    );
  }, [photos, searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl px-8 py-8 mb-8 text-white text-center shadow-lg">
          <h1 className="text-4xl font-bold mb-1">Photo Gallery</h1>
          <p className="text-rose-100 text-sm">
            {favouriteIds.length === 0
              ? 'Click the heart icon to save your favourites'
              : `${favouriteIds.length} photo${favouriteIds.length !== 1 ? 's' : ''} favourited`}
          </p>
        </div>

        <SearchBar
          value={searchQuery}
          onChange={handleSearchChange}
          resultCount={filteredPhotos.length}
          total={photos.length}
        />

        {loading && <LoadingSpinner />}

        {error && (
          <div className="text-center text-red-600 bg-red-50 border border-red-200 rounded-lg py-6 px-4">
            <p className="font-semibold text-lg">Failed to load photos</p>
            <p className="text-sm mt-1">{error}</p>
          </div>
        )}

        {!loading && !error && (
          <Gallery
            photos={filteredPhotos}
            favouriteIds={favouriteIds}
            onToggleFavourite={handleToggleFavourite}
          />
        )}
      </div>
    </div>
  );
}

export default App;
