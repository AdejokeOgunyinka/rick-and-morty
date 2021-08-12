import { combineReducers } from 'redux';
import { charactersReducer } from './reducers/characters';
import { characterReducer} from './reducers/character';
import { favouritesReducer } from './reducers/favourites';

const rootReducer = combineReducers({
    characterReducer,
    charactersReducer,
    favouritesReducer
});

export default rootReducer;
