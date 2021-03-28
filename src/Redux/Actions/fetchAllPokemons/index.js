import {FETCH_POKEMON_REQUEST, FETCH_POKEMON_SUCCESS, FETCH_POKEMON_FAILURE }from '../../CONSTANTS'

export function fetchPokemonsRequest(){
    return{
        type: FETCH_POKEMON_REQUEST
    }
}

export function fetchPokemonsSuccess(pokemons){
    return{
        type: FETCH_POKEMON_SUCCESS,
        payload: pokemons
    }
}

export function fetchPokemonsFailuere(errorMsg){ 
    return{
        type: FETCH_POKEMON_FAILURE,
        payload: errorMsg
    }
}

