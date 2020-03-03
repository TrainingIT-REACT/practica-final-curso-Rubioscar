const initialState = {
    usuario: {}
}

const user = (state = initialState, action) => {
    if (action.type === "SET_USER") {
        return { usuario: action.payload }
    } else {
        return state;
    }
}

export default user;