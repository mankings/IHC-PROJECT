// JavaScript source code
import React from 'react'

import NavButton from './NavButton'
import './App.css'

function Body(props) {
    return (
        <div className="body">
            <ul>
                <li><NavButton text="StampHub" /></li>
                <li><NavButton text="Add Stamp" /></li>
                <li><NavButton text="Manage Collections" /></li>
            </ul>
            <Title className="title" title={props.title} />

        </div>
    );
}

export default Body