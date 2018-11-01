import { combineReducers } from 'redux'
import {movies, movieFilter} from './appState/reducer'

export default combineReducers({
    movies,
    movieFilter 
 })