import React from 'react'
import './App.css'

function NavButton(props) {
    return <button onClick={props.clickHandler}>{props.text}</button>
}

export default NavButton