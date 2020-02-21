import { getAlbumSongs, getTrendsSongs } from '../actions/songs';

// Estado inicial
const initialStateCanciones = {
    isLoading: false,
    songs: [],
    error: false
}

const initialStateTendencias = {
  isLoading: false,
  trends: [],
  error: false
}

// Implementamos el reducer
export const canciones = (state = initialStateCanciones, action) => {
  switch(action.type) {
    case String(getAlbumSongs.pending):
      return {
        ...state,
        isLoading: true,
        error: false
      };
    case String(getAlbumSongs.fulfilled):
      return {
        ...state,
        isLoading: false,
        songs: action.payload,
        error: false
      }
    case String(getAlbumSongs.rejected):
      return {
        ...state,
        isLoading: false,
        error: true
      }
    default:
      return state;
  }
}

export const tendencias = (state = initialStateTendencias, action) => {
  switch(action.type) {
    case String(getTrendsSongs.pending):
      return {
        ...state,
        isLoading: true,
        error: false
      };
    case String(getTrendsSongs.fulfilled):
      return {
        ...state,
        isLoading: false,
        trends: action.payload,
        error: false
      }
    case String(getTrendsSongs.rejected):
      return {
        ...state,
        isLoading: false,
        error: true
      }
    default:
      return state;
  }
}

// export default canciones;