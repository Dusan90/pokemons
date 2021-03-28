import { FETCH_UNIQUE_POKEMON_SUCCESS, FETCH_UNIQUE_POKEMON_REQUEST, FETCH_UNIQUE_POKEMON_FAILURE } from "../../CONSTANTS";


const initialState = {
    loading: false,
    pokemon: [],
    error: ''
}

export default function (state = initialState, action) {
    switch (action.type){
        case FETCH_UNIQUE_POKEMON_REQUEST:
            return{
                ...state,
                loading: true
            }
        case FETCH_UNIQUE_POKEMON_SUCCESS:
            return{
                loading: false,
                pokemon: action.payload,
                error: ''
            }
        case FETCH_UNIQUE_POKEMON_FAILURE:
            return{
                loading: false, 
                pokemon: [],
                error: action.payload
            }
            default: return state
    }
}