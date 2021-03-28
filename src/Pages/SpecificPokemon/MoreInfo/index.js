import React from 'react'
import {useSelector} from 'react-redux'

function MoreInfo() {
    const moreInfo = useSelector(state => state.MoreInfoReducer)
    console.log(moreInfo);
    return (
     <div>hello</div>
    )
}



export default MoreInfo
