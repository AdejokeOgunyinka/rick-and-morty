import {
    FETCH_CHARACTERS_FAILURE, 
    FETCH_CHARACTERS_SUCCESS, 
    FETCH_CHARACTERS_REQUEST
} from '../actions/characters';

const initialState = {
    loading: false,
    characters: [],
    error: "",
    count: 0,
    url : "https://rickandmortyapi.com/api/character",
    nextUrl: ""
};

export const charactersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_CHARACTERS_REQUEST:
            return {
                ...state,
                loading: true,
                characters: [],
                count: 0,
                nextUrl: "",
                error: ""
            }

        case FETCH_CHARACTERS_SUCCESS:
            return {
                ...state,
                loading: false,
                characters: action.payload,
                count: action.count,
                nextUrl: action.nextUrl,
                error: ""
            }
        
        case FETCH_CHARACTERS_FAILURE:
            return {
                ...state,
                loading: false,
                characters: [],
                count: 0,
                nextUrl: "",
                error: action.payload
            }
        
        default:
            return state
    }
};

// export default charactersReducer;
