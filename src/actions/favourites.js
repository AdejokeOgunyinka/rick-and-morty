export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";

export const addToFavourites = ( character ) => {
    return {
        type: ADD_TO_FAVOURITES,
        payload: character,
    }
};

export const removeFromFavourites = ( character ) => {
    return {
        type: REMOVE_FROM_FAVOURITES,
        payload: character,
    }
};
