import { 
    FETCH_CHARACTER_SUCCESS,
    FETCH_CHARACTER_FAILURE,
    FETCH_CHARACTER_REQUEST 
} from "../actions/character";

const initialState = {
    loading: false,
    character: {},
    error: ""
}

export const characterReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_CHARACTER_REQUEST:
            return {
                ...state,
                loading: true,
                character: {},
            }

        case FETCH_CHARACTER_SUCCESS:
            return {
                ...state,
                loading: false,
                character: action.payload,
                error: ""
            }
        
        case FETCH_CHARACTER_FAILURE:
            return {
                ...state,
                loading: false,
                character: {},
                error: action.payload
            }
        
        default:
            return state
    }
};