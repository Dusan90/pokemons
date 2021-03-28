import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import {useSelector} from 'react-redux'
import {store} from '../../index';
import logo from '../../logo.svg'
import './specificPokemon.scss'
import {fetchUniquePokemons} from '../../Api'
import {fetchMoreUniquePokemons} from '../../Api'
import {fetchTypePokemons} from '../../Api'
import MoreInfo from './MoreInfo'
import MoreByType from './MoreByType'
import Button from '../../Components/Button'

function SpecificPokemon() {
    const pokemonUniqueData = useSelector((state) => state.UniquePokemonReducer);
    const params = useParams()
    useEffect(() =>{store.dispatch(fetchUniquePokemons(params.id))}, [params.id])
    const [clickedButton, setClickedButton] = useState(false)
    const [TypeButton, setTypeButton] = useState(false)
    const pokemon = pokemonUniqueData && pokemonUniqueData['pokemon']
    useEffect(() => {
        clickedButton && store.dispatch(fetchMoreUniquePokemons(pokemon['species']['url']))
    })

    const handleClick = (url, callback) =>{
        store.dispatch(fetchMoreUniquePokemons(url))
        callback(true)
    }

    const typeHandleClick = (url, callback) => {
        store.dispatch(fetchTypePokemons(url))
        callback(true)
    }

    const fetchDataForRedirect = (id) =>{
        store.dispatch(fetchUniquePokemons(id))
        setClickedButton(false)
    }
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
                <Button  clickedButton={TypeButton} title={'Type'} handleClick={() => typeHandleClick(pokemon['types'][0]['type']['url'], setTypeButton)}/>
                <Button  clickedButton={clickedButton} title={'More Info'} handleClick={() => handleClick(pokemon['species']['url'], setClickedButton)}/>
                <MoreByType buttonTypeClicked={TypeButton} fetchDataForRedirect={fetchDataForRedirect}/> 
                <MoreInfo buttonClicked={clickedButton}/>
               
               </div> 
    )
}

export default SpecificPokemon
