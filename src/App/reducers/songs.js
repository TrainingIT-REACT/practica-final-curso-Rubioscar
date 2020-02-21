import { getAlbumSongs } from '../actions/songs';

// Estado inicial
const initialState = {
    isLoading: false,
    songs: [],
    error: false
}

// Implementamos el reducer
const canciones = (state = initialState, action) => {
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

export default canciones;