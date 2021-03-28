import { FETCH_MORE_UNIQUE_POKEMON_SUCCESS, FETCH_MORE_UNIQUE_POKEMON_REQUEST, FETCH_MORE_UNIQUE_POKEMON_FAILURE } from "../../../CONSTANTS";


const initialState = {
    loading: false,
    more_info: [],
    error: ''
}

export default function (state = initialState, action) {
    switch (action.type){
        case FETCH_MORE_UNIQUE_POKEMON_REQUEST:
            return{
                ...state,
                loading: true
            }
        case FETCH_MORE_UNIQUE_POKEMON_SUCCESS:
            return{
                loading: false,
                more_info: action.payload,
                error: ''
            }
        case FETCH_MORE_UNIQUE_POKEMON_FAILURE:
            return{
                loading: false, 
                more_info: [],
                error: action.payload
            }
            default: return state
    }
}