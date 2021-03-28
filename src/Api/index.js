import axios from 'axios'
import {fetchPokemonsRequest, fetchPokemonsSuccess, fetchPokemonsFailuere} from '../Redux/Actions/fetchAllPokemons'
import {fetchUniquePokemonsRequest, fetchUniquePokemonsSuccess, fetchUniquePokemonsFailuere} from '../Redux/Actions/fetchSpecificPokemon'
import {fetchTypePokemonsRequest, fetchTypePokemonsSuccess, fetchTypePokemonsFailuere} from '../Redux/Actions/fetchSpecificPokemon/fetchPokemonbyType'
import {fetchMoreUniquePokemonsRequest, fetchMoreUniquePokemonsSuccess, fetchMoreUniquePokemonsFailuere} from '../Redux/Actions/fetchSpecificPokemon/fetchMoreInfo'

export function fetchPokemons() {
    return function (dispatch){        
        dispatch(fetchPokemonsRequest())
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
        
        .then(response =>{
            const pokemons = response.data.results.map((data, index) =>{
                return {name: data.name, id: index + 1, image: `https://pokeres.bastionbot.org/images/pokemon/${index + 1}.png`, url: data.url}
            })

            dispatch(fetchPokemonsSuccess(pokemons))
        })
        .catch((error) =>{
            console.log(error);
            
            const errorMsg = error.message
            dispatch(fetchPokemonsFailuere(errorMsg))
        })
    }
}



export function fetchUniquePokemons(name) {
    return function (dispatch){        
        dispatch(fetchUniquePokemonsRequest())
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        
        .then(response =>{
            const pokemon = response.data
            dispatch(fetchUniquePokemonsSuccess(pokemon))
        })
        .catch((error) =>{
            console.log(error);
            
            const errorMsg = error.message
            dispatch(fetchUniquePokemonsFailuere(errorMsg))
        })
    }
}


export function fetchTypePokemons(url) {
    return function (dispatch){        
        dispatch(fetchTypePokemonsRequest())
        axios.get(`${url}`)
        
        .then(response =>{
            const Type = response.data
            dispatch(fetchTypePokemonsSuccess(Type))
        })
        .catch((error) =>{
            console.log(error);
            
            const errorMsg = error.message
            dispatch(fetchTypePokemonsFailuere(errorMsg))
        })
    }
}

export function fetchMoreUniquePokemons(url) {
    return function (dispatch){        
        dispatch(fetchMoreUniquePokemonsRequest())
        axios.get(`${url}`)
        
        .then(response =>{
            const MoreInfo = response.data
            dispatch(fetchMoreUniquePokemonsSuccess(MoreInfo))
        })
        .catch((error) =>{
            console.log(error);
            
            const errorMsg = error.message
            dispatch(fetchMoreUniquePokemonsFailuere(errorMsg))
        })
    }
}