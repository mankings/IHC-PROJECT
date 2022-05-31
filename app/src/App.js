import React from 'react';
import Header from './Header'
import Body from './Body'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import styled from "styled-components";
import { Dropdown } from 'react-bootstrap';
function App() {
  return (
    <div className="app">

      <Header title="StampHub"/>
      <Body title="StampHubBody"/>

    </div>
  );
}

export default App;
