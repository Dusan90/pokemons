import axios from 'axios'
import {fetchPokemonsRequest, fetchPokemonsSuccess, fetchPokemonsFailuere} from '../Redux/Actions/fetchAllPokemons'
import {fetchUniquePokemonsRequest, fetchUniquePokemonsSuccess, fetchUniquePokemonsFailuere} from '../Redux/Actions/fetchSpecificPokemon'

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