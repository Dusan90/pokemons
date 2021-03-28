import { FETCH_POKEMON_SUCCESS, FETCH_POKEMON_REQUEST, FETCH_POKEMON_FAILURE } from "../../CONSTANTS";


const initialState = {
    loading: false,
    pokemons: [],
    error: ''
}

export default function (state = initialState, action) {
    switch (action.type){
        case FETCH_POKEMON_REQUEST:
            return{
                ...state,
                loading: true
            }
        case FETCH_POKEMON_SUCCESS:
            return{
                loading: false,
                pokemons: action.payload,
                error: ''
            }
        case FETCH_POKEMON_FAILURE:
            return{
                loading: false, 
                pokemons: [],
                error: action.payload
            }
            default: return state
    }
}