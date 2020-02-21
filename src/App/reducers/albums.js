import { getAlbums, getAlbum } from '../actions/albums';

// Estado inicial
const initialStateAlbunes = {
    isLoading: false,
    albums: [],
    error: false
}

const initialStateAlbun = {
  isLoading: false,
  album: {},
  error: false
}

// Implementamos el reducer
export const albunes = (state = initialStateAlbunes, action) => {
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

export const albun = (state = initialStateAlbun, action) => {
  switch(action.type) {
    case String(getAlbum.pending):
      return {
        ...state,
        isLoading: true,
        error: false
      };
    case String(getAlbum.fulfilled):
      return {
        ...state,
        isLoading: false,
        album: action.payload,
        error: false
      }
    case String(getAlbum.rejected):
      return {
        ...state,
        isLoading: false,
        error: true
      }
    default:
      return state;
  }
}

//export default albunes;