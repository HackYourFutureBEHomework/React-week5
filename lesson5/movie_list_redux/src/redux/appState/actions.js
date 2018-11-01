export const addMovies = (movieList, page) => ({
    type: 'ADD_MOVIES',
    movieList,
    page
})

export const getMovies = filter => ({
    type: 'GET_MOVIES',
    filter
})

export const filterMovies = movieFilter => ({
    type: 'FILTER_MOVIES',
    movieFilter
})

export const addGenre = genre => ({
    type: 'ADD_FILTER_GENRE',
    genre
})

export const setSearchTitle = searchTitle => ({
    type: 'SET_SEARCH_TITLE',
    searchTitle
})

export const getGenres = () => ({
    type: 'GET_GENRES'
})