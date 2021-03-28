import React from 'react'
import {useSelector} from 'react-redux'
import PropTypes from 'prop-types';

function MoreInfo({buttonClicked}) {
    const moreInfo = useSelector(state => state.MoreInfoReducer)
    
    return (
        moreInfo['loading'] ? (
            <h2>loading...</h2>) : moreInfo['error'] ? (
               <h2>{moreInfo['error']}</h2>
            ) :
        ( Object.keys(moreInfo['more_info']).length !== 0 && buttonClicked && <div>
            <h2>More info</h2>
            { moreInfo['more_info']['flavor_text_entries'].slice(1, 20).map((i, a) =>{
                return <p key={a}>{i.flavor_text}</p>
            })}
        </div>)
    )
}

MoreInfo.propTypes = {
    buttonClicked: PropTypes.bool
  };

export default MoreInfo
