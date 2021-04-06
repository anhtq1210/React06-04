import React from 'react';
import logo from './logo.svg';
import './App.css';
import {FirstAssignment} from './Component/FirstAssignment'
import { SecondAssignment } from './Component/SecondAssignment';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <FirstAssignment/> */}
        <SecondAssignment/>
      </header>
    </div>
  );
}

export default App;
