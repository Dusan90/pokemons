import { combineReducers } from 'redux'
import PokemonReducer from './fetchAllPokemonReducer'
import UniquePokemonReducer from './fetchSpecificPokemonReducer'
import MoreInfoReducer from './fetchSpecificPokemonReducer/fetchMoreInfoReducer'
import MoreByType from './fetchSpecificPokemonReducer/fetchPokemonByTypeReducer'

const rootReducers = combineReducers({
    PokemonReducer,
    UniquePokemonReducer,
    MoreInfoReducer,
    MoreByType
})


export default rootReducers