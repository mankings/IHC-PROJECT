import React from 'react';
import './App.css';
import Header from './Header'
import Body from './Body'
import 'bootstrap/dist/css/bootstrap.min.css';

import styled from "styled-components";
function App() {
  return (
    <div className="app">

      <Header title="StampHub"/>
      <Body title="StampHubBody"/>


    </div>
  );
}

export default App;
