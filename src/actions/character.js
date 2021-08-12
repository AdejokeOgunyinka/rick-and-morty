import axios from "axios";


export const FETCH_CHARACTER_REQUEST = "FETCH_CHARACTER_REQUEST";
export const FETCH_CHARACTER_SUCCESS = "FETCH_CHARACTER_SUCCESS";
export const FETCH_CHARACTER_FAILURE = "FETCH_CHARACTER_FAILURE";


export const fetchCharacterRequest = character => {
    return {
        type: FETCH_CHARACTER_REQUEST,
        payload: character,
    }
};

export const fetchCharacterSuccess = character => {
    return {
        type: FETCH_CHARACTER_SUCCESS,
        payload: character,
    }
};

export const fetchCharacterFailure = error => {
    return {
        type: FETCH_CHARACTER_FAILURE,
        payload: error
    }
};

export const fetchCharacter = (url) => {
    console.log("here")
    return function(dispatch) {
        
        dispatch(fetchCharacterRequest);
        
        axios.get(url)
            .then(response => {
                //response.data
                const character = response.data;
                console.log("character array..",character);

                dispatch(fetchCharacterSuccess(character));
            })
            .catch(error => {
                // error.message
                dispatch(fetchCharacterFailure(error.message))
            })
    }
};
