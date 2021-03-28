import React from 'react'

const index =({title, handleClick, clickedButton}) => {
        return (<>
        <button style={{display: clickedButton && 'none'}} onClick={handleClick}>{title}</button>
            
        </>)
}

export default index
 