import React from 'react'
import {useSelector} from 'react-redux'

function MoreByType() {
    const MoreType = useSelector(state => state.MoreByType)
   console.log(MoreType);
    return (
        <div>hello type</div>
    )
}

export default MoreByType
