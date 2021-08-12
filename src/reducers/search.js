import {
    FETCH_SEARCH_FAILURE, 
    FETCH_SEARCH_SUCCESS, 
    FETCH_SEARCH_REQUEST
} from '../actions/search';

const initialState = {
    loading: false,
    searchResults: []
};

export const searchReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SEARCH_REQUEST:
            return {
                ...state,
                loading: true,
                searchResults: [],
                error: ""
            }

        case FETCH_SEARCH_SUCCESS:
            return {
                ...state,
                loading: false,
                searchResults: action.payload,
                error: ""
            }
        
        case FETCH_SEARCH_FAILURE:
            return {
                ...state,
                loading: false,
                searchResults: [],
                error: action.payload
            }
        
        default:
            return state
    }
};
