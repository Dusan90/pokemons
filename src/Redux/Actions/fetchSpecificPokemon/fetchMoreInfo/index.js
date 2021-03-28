import {FETCH_MORE_UNIQUE_POKEMON_REQUEST, FETCH_MORE_UNIQUE_POKEMON_SUCCESS, FETCH_MORE_UNIQUE_POKEMON_FAILURE }from '../../../CONSTANTS'

export function fetchMoreUniquePokemonsRequest(){
    return{
        type: FETCH_MORE_UNIQUE_POKEMON_REQUEST
    }
}

export function fetchMoreUniquePokemonsSuccess(pokemon){
    return{
        type: FETCH_MORE_UNIQUE_POKEMON_SUCCESS,
        payload: pokemon
    }
}

export function fetchMoreUniquePokemonsFailuere(errorMsg){
    return{
        type: FETCH_MORE_UNIQUE_POKEMON_FAILURE,
        payload: errorMsg
    }
}
