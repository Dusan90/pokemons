import React, {useEffect} from 'react'
import { useSelector } from "react-redux";
import {fetchPokemons} from '../../Api'
import {store} from '../../index'


function Home() {
  const pokemonData = useSelector((state) => state.PokemonReducer);
  useEffect(() => {store.dispatch(fetchPokemons());}, []);
    console.log(pokemonData);
    return (
        <div>
            home
        </div>
    )
}

export default Home
