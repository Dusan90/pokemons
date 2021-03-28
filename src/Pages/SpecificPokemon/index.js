import React, {useEffect} from 'react'
import {useParams} from "react-router-dom";
import {useSelector} from 'react-redux'
import {store} from '../../index';
import logo from '../../logo.svg'
import './specificPokemon.scss'
import {fetchUniquePokemons} from '../../Api'

function SpecificPokemon() {
    const pokemonUniqueData = useSelector((state) => state.UniquePokemonReducer);
    const params = useParams()
    useEffect(() =>{store.dispatch(fetchUniquePokemons(params.id))}, [params.id])
    const pokemon = pokemonUniqueData && pokemonUniqueData['pokemon']

    return (
        pokemonUniqueData['loading'] ? (
            <img className='App-logo' src={logo} alt='loading...'/>) : pokemonUniqueData['error'] ? (
               <h2>{pokemonUniqueData['error']}</h2>
            ) :
            <div className='Pokemon'>
               <h2>{pokemon['name']}</h2>
              <div className='mainUniquePokemonInfo'> 
                     {Object.keys(pokemon).length !== 0 && <div className='UniquepokemonInfo'>
                        <img src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon['id']}.png`} onError={(e)=>{e.target.onerror = null; e.target.src='https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png'}} alt='' />
                        <div className='MainPokemonInfoDiv'>
                        <div className='Ability'>
                        <span>Ability:</span>
                        {pokemon['abilities'].map((i, a) => <p key={a}>{i.ability['name']}</p> )}
                        </div>
                        {pokemon['held_items'].length !== 0 && <div className='Items'>
                        <span>Held Items:</span>
                        {pokemon['held_items'].map((i, a) => <p key={a}>{i.item['name']}</p> )}
                        </div>}
                        <div className='Moves'>
                        <span>Moves:</span> 
                        {pokemon['moves'].slice(0, 9).map((i, a) => <p key={a}>{i.move['name']}</p> )}
                        </div>
                        <div className='Overview'>
                        <span>Overview:</span>
                          {pokemon['stats'].map((i, a) => <p key={a}>{i.stat['name']}: {i.base_stat}</p> )}
                        </div>
                        <div className='Type'>
                        <span>Type:</span> 
                        {pokemon['types'].map((i, a) =><p key={a}>{i.type['name']}</p> )}
                        </div>
                        </div>
                      </div>  }
                </div>

               </div> 
    )
}

export default SpecificPokemon
