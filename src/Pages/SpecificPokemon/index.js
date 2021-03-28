import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'
import {useParams} from "react-router-dom";
import {store} from '../../index';
import {fetchUniquePokemons} from '../../Api'

function SpecificPokemon() {
    const pokemonUniqueData = useSelector((state) => state.UniquePokemonReducer);
    const params = useParams()
    useEffect(() =>{store.dispatch(fetchUniquePokemons(params.id))}, [params.id])

    console.log(pokemonUniqueData);
    return (
        <div>
            spec pokemon
        </div>
    )
}

export default SpecificPokemon
