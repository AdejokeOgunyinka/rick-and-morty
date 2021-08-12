import axios from "axios";

export const FETCH_SEARCH_REQUEST = "FETCH_SEARCH_REQUEST";
export const FETCH_SEARCH_SUCCESS = "FETCH_SEARCH_SUCCESS";
export const FETCH_SEARCH_FAILURE = "FETCH_SEARCH_FAILURE";


export const fetchSearchRequest = () => {
    return {
        type: FETCH_SEARCH_REQUEST
    }
};

export const fetchSearchSuccess = (searchCharacters) => {
    return {
        type: FETCH_SEARCH_SUCCESS,
        payload: searchCharacters,
    }
};

export const fetchSearchFailure = error => {
    return {
        type: FETCH_SEARCH_FAILURE,
        payload: error
    }
};

export const fetchSearch = (keyword) => {
    
    return function(dispatch) {
        
        dispatch(fetchSearchRequest);
        
        axios.get(`https://rickandmortyapi.com/api/character/?name=${keyword}`)
            .then(response => {
                //response.data
                const characters = response.data["results"];
                dispatch(fetchSearchSuccess(characters));
            })
            .catch(error => {
                // error.message
                dispatch(fetchSearchFailure(error.message))
            })
    }
};

