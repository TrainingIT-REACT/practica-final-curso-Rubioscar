import { getAlbums } from '../actions/albums';

// Estado inicial
const initialState = {
    isLoading: false,
    albums: [],
    error: false
}

// Implementamos el reducer
const albunes = (state = initialState, action) => {
  switch(action.type) {
    case String(getAlbums.pending):
      return {
        ...state,
        isLoading: true,
        error: false
      };
    case String(getAlbums.fulfilled):
      return {
        ...state,
        isLoading: false,
        albums: action.payload,
        error: false
      }
    case String(getAlbums.rejected):
      return {
        ...state,
        isLoading: false,
        error: true
      }
    default:
      return state;
  }
}

export default albunes;