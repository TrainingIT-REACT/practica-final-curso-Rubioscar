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
                    ...state.albums,
                    action.payload,
                ]
            };
        case "SET_SONG" :
            return {
                ...state,
                songs: [
                    ...state.songs,
                    action.payload,
                ]
            };
        default:
            return state;
    }
}

export default historico;