import {combineReducers} from 'redux';
import films from './movie_reducers';

const rootReducer = combineReducers({
    films
})

export default rootReducer;