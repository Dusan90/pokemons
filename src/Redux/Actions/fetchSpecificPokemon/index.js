import {FETCH_UNIQUE_POKEMON_REQUEST, FETCH_UNIQUE_POKEMON_SUCCESS, FETCH_UNIQUE_POKEMON_FAILURE }from '../../CONSTANTS'

export function fetchUniquePokemonsRequest(){
    return{
        type: FETCH_UNIQUE_POKEMON_REQUEST
    }
}

export function fetchUniquePokemonsSuccess(pokemon){
    return{
        type: FETCH_UNIQUE_POKEMON_SUCCESS,
        payload: pokemon
    }
}

export function fetchUniquePokemonsFailuere(errorMsg){
    return{
        type: FETCH_UNIQUE_POKEMON_FAILURE,
        payload: errorMsg
    }
}
