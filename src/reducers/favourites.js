import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from "../actions/favourites";

const initialState = {
    favourites: [],
}

export const favouritesReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_FAVOURITES:
            return {
                ...state,
                favourites: [...state.favourites, action.payload],
            }

        case REMOVE_FROM_FAVOURITES:
            return {
                ...state,
                favourites: state.favourites.filter(favourite=>favourite.id!==action.payload.id),
            }
        
        default:
            return state
    }
};
