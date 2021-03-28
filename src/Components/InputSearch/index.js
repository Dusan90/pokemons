import React, {useState} from 'react'
import './inputSearch.scss'
import { FcSearch } from "react-icons/fc";

function index({handleChange, value}) {
    const [active, setActive] = useState(false)
    const handleActiveInput = () =>{
        setActive(true)
    }

    const handleBlurInput = () =>{
        !value && setActive(false)
    }

    return (
        <div className='inputDiv'>
        {!active && <FcSearch className='searchIcon'/>}
        <input type="text" onFocus={handleActiveInput} value={value} placeholder={!active ? 'type name...' : ''} onBlur={handleBlurInput} onChange={handleChange}/>   
        </div>
    ) 
}

export default index
