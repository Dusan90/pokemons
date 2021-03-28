import React from 'react'
import {useSelector} from 'react-redux'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

const styled = {
    padding: '0 2px',
    wordBreak: 'break-all'
}

function MoreByType({buttonTypeClicked, fetchDataForRedirect}) {
    const MoreType = useSelector(state => state.MoreByType)
   
    return (
        MoreType['loading'] ? (
            <h2>loading...</h2>) : MoreType['error'] ? (
               <h2>{MoreType['error']}</h2>
            ) :
        (Object.keys(MoreType['more_by_type']).length !== 0 && buttonTypeClicked && <div>
            <h2>Pokemons with same type</h2>
            <div>
            {MoreType['more_by_type']['pokemon'].slice(1, 100).map((i, a) =>{
                return <Link onClick={() => fetchDataForRedirect(i.pokemon['name'])} to={`/pokemon/${i.pokemon['name']}/`} style={styled} key={a}>{i.pokemon['name']},</Link>
            })}
            </div>
        </div>)
    )
}

MoreByType.propTypes = {
    buttonTypeClicked: PropTypes.bool.isRequired,
    fetchDataForRedirect: PropTypes.func
  };

export default MoreByType
