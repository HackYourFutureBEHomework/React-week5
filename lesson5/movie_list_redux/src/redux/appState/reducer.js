const moviesState = {
    movieList: [],
    page: 1,
}

export const movies = (state = moviesState, action) => {
    const newState = Object.assign({}, state)
    switch (action.type) {
        case 'ADD_MOVIES':
            newState.movieList = action.movieList
            newState.page = action.page
            return newState
        default:
            return state
    }
}

export const genres = (state = [], action) => {
    const newState = Object.assign({}, state)
    switch (action.type) {
        case 'ADD_GENRES':
        newState.genres = [...state.genres, action.genre]
        return newState
        default: 
            return state
    }
}

const filterState = {
    genres: [],
    searchTitle: ''
}

export const movieFilter = (state = filterState, action) => {
    const newState = Object.assign({}, state)
    switch (action.type) {
        case 'FILTER_MOVIES':
            return action.movieFilter
        case 'ADD_FILTER_GENRE':
            newState.genres = [...state.genres, action.genre]
            return newState
        case 'SET_SEARCH_TITLE':
            newState.searchTitle = action.searchTitle
            return newState
        default:
            return state
    }
}