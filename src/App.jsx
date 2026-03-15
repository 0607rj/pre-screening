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
    <div className="min-h-screen bg-[#fafafa]">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#1a1a2e] rounded-xl flex items-center justify-center shadow-lg shadow-[#1a1a2e]/20">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
            </div>
            <span className="font-display text-xl font-bold text-[#1a1a2e] tracking-tight">Celebrare</span>
          </div>
          <div className="flex items-center gap-2">
            {favouriteIds.length > 0 && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-50 text-rose-600 text-xs font-medium">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
                {favouriteIds.length}
              </span>
            )}
          </div>
        </div>
      </nav>

  
      <header className="relative overflow-hidden bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 relative z-10">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#1a1a2e]/50 uppercase tracking-widest mb-4">Curated Photography</p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-[#1a1a2e] leading-tight mb-4">
              Discover<br/>Stunning Photos
            </h1>
          
          </div>
        </div>

       
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none">
          <div className="absolute top-8 right-8 w-64 h-64 rounded-full border-[3px] border-[#1a1a2e]"></div>
          <div className="absolute top-24 right-32 w-40 h-40 rounded-full border-[3px] border-[#1a1a2e]"></div>
          <div className="absolute bottom-8 right-16 w-80 h-80 rounded-full border-[3px] border-[#1a1a2e]"></div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10">
        <SearchBar
          value={searchQuery}
          onChange={handleSearchChange}
          resultCount={filteredPhotos.length}
          total={photos.length}
        />

        {loading && <LoadingSpinner />}

        {error && (
          <div className="flex items-center gap-4 bg-red-50 border border-red-100 rounded-2xl py-5 px-6 animate-fade-in">
            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="15" y1="9" x2="9" y2="15"/>
                <line x1="9" y1="9" x2="15" y2="15"/>
              </svg>
            </div>
            <div>
              <p className="font-semibold text-red-700">Failed to load photos</p>
              <p className="text-sm text-red-500 mt-0.5">{error}</p>
            </div>
          </div>
        )}

        {!loading && !error && (
          <Gallery
            photos={filteredPhotos}
            favouriteIds={favouriteIds}
            onToggleFavourite={handleToggleFavourite}
          />
        )}
      </main>

    
      <footer className="border-t border-gray-100 bg-white mt-16">
        <div className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#1a1a2e] rounded-lg flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
            </div>
            <span className="text-sm font-display font-semibold text-[#1a1a2e]">Celebrare</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
