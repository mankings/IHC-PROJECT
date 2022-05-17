import React from 'react'
import Title from './Title'
import './App.css'

function Header(props) {
    return (
        <div className="header">
            <Title title={props.title}/>
        </div>
    );
}

export default Header