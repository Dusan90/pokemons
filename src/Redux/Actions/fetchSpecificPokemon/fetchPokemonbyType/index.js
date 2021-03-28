import {FETCH_MORE_TYPE_UNIQUE_POKEMON_REQUEST, FETCH_MORE_TYPE_UNIQUE_POKEMON_SUCCESS, FETCH_MORE_TYPE_UNIQUE_POKEMON_FAILURE }from '../../../CONSTANTS'

export function fetchTypePokemonsRequest(){
    return{
        type: FETCH_MORE_TYPE_UNIQUE_POKEMON_REQUEST
    }
}

export function fetchTypePokemonsSuccess(pokemon){
    return{
        type: FETCH_MORE_TYPE_UNIQUE_POKEMON_SUCCESS,
        payload: pokemon
    }
}

export function fetchTypePokemonsFailuere(errorMsg){
    return{
        type: FETCH_MORE_TYPE_UNIQUE_POKEMON_FAILURE,
        payload: errorMsg
    }
}
