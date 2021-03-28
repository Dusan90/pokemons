import { combineReducers } from 'redux'
import PokemonReducer from './fetchAllPokemonReducer'
import UniquePokemonReducer from './fetchSpecificPokemonReducer'

const rootReducers = combineReducers({
    PokemonReducer,
    UniquePokemonReducer,
  
})


export default rootReducers