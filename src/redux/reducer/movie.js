const movieReducer = (state = [], action) => {
    if (action.type === "SEARCH_MOVIE") {
        state = action.data;
    }
    return state;
}

export default movieReducer;//reducer search movie