const STORAGE_KEY = 'photo-gallery-favourites';

export function loadFavourites() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

function saveFavourites(ids) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  } catch {
    // ignore
  }
}

export function favouritesReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_FAVOURITE': {
      const id = action.payload;
      const next = state.includes(id)
        ? state.filter((fid) => fid !== id)
        : [...state, id];
      saveFavourites(next);
      return next;
    }
    default:
      return state;
  }
}
