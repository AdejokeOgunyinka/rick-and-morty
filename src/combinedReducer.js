import { combineReducers } from "redux";
import { charactersReducer } from "./reducers/characters";
import { characterReducer} from "./reducers/character";
import { favouritesReducer } from "./reducers/favourites";
import { searchReducer } from "./reducers/search";

const rootReducer = combineReducers({
    characterReducer,
    charactersReducer,
    favouritesReducer,
    searchReducer
});

export default rootReducer;
