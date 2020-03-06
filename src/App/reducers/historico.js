// import { setAlbum, setSong } from '../actions/historico';

const initialState = {
    albums: [],
    songs: [],
}

const historico = (state = initialState, action) => {
    switch(action.type) {
        case "SET_ALBUM" :
            return {
                ...state,
                albums: [
                    action.payload,
                    ...state.albums,
                ]
            };
        case "SET_SONG" :
            return {
                ...state,
                songs: [
                    action.payload,
                    ...state.songs,
                ]
            };
        default:
            return state;
    }
}

export default historico;