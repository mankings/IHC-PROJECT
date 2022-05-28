import React from 'react';
import './App.css';
import Header from './Header'
import Body from './Body'

import styled from "styled-components";
import {Modal,  Button} from 'react-bootstrap';
function App() {
  return (
    <div className="app">

      <Header title="StampHub"/>
      <Body title="StampHubBody"/>


    </div>
  );
}

export default App;
