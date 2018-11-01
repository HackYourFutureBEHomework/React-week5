import { createStore } from 'redux'
import rootReducer from './combineReducers'

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  // !important if you like to use redux DevTools
)

export default store