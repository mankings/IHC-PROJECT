import React from 'react'
import Title from './Title'
import NavButton from './NavButton'
import './App.css'

function Header(props) {
    return (
        <div className="header">
            <ul>
                <li><NavButton text="Add Stamp" /></li>
                <li><NavButton text="Manage Collections" /></li>
            </ul>
            <Title className="title" title={props.title} />

        </div>
    );
}

export default Header