import React from 'react'
import { Route, Switch } from "react-router-dom";
import Dashboard from './Pages/Home'
import SpecificPokemon from './Pages/SpecificPokemon'


function Routes() {
    return (
        <>
            <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/pokemon/:id/" exact component={SpecificPokemon} />
            </Switch>
        </>
    )
}

export default Routes