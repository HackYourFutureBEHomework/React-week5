import store from '../redux/store'
import { addMovies } from '../redux/appState/actions';
const apiKey = 'aa0c2d1e7e4e9795884cf0c1ba700c63'


export const getMovies = page => {
    const getMovies = async () => {
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${page}`
        const options = {
            method: 'GET'
        }
        const response = await fetch(url, options)
        return await response.json()
    }
    getMovies()
    .then(movies => {
        console.log('movies: ', movies)
        store.dispatch(addMovies(movies.results, page))
    })
    .catch(error => console.warn('error: ', error))
}

window.getMovies = getMovies