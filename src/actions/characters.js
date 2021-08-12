import axios from "axios";

export const FETCH_CHARACTERS_REQUEST = "FETCH_CHARACTERS_REQUEST";
export const FETCH_CHARACTERS_SUCCESS = "FETCH_CHARACTERS_SUCCESS";
export const FETCH_CHARACTERS_FAILURE = "FETCH_CHARACTERS_FAILURE";


export const fetchCharactersRequest = () => {
    return {
        type: FETCH_CHARACTERS_REQUEST
    }
};

export const fetchCharactersSuccess = (characters, nextUrl, count) => {
    return {
        type: FETCH_CHARACTERS_SUCCESS,
        payload: characters,
        nextUrl: nextUrl,
        count: count
    }
};

export const fetchCharactersFailure = error => {
    return {
        type: FETCH_CHARACTERS_FAILURE,
        payload: error
    }
};

export const fetchCharacters = (url) => {
    
    return function(dispatch) {
        
        dispatch(fetchCharactersRequest);
        
        axios.get(url)
            .then(response => {
                //response.data
                const characters = response.data["results"];
                // const nextUrl = response.data["info"]["next"];
                // const count = response.data["info"]["count"];

                dispatch(fetchCharactersSuccess(characters));
            })
            .catch(error => {
                // error.message
                dispatch(fetchCharactersFailure(error.message))
            })
    }
};
