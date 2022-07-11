import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import {blue } from '@mui/material/colors';


function App() {
  
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My least favorite colors
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        
      <Button variant="contained"
      href="https://en.wikipedia.org/wiki/Green"
      target="_blank"
      rel="noopener noreferrer"
      color="success">
      Green
      </Button>
      
      <Button variant="contained"
       href="https://en.wikipedia.org/wiki/Red"
       target="_blank"
       rel="noopener noreferrer"
      color="error">
      Red
      </Button>

      <Button variant="contained"color="secondary">
      Purple
      </Button>

  My favorite colors

  <Button variant="contained"
       href="https://en.wikipedia.org/wiki/Blue"
       target="_blank"
       rel="noopener noreferrer"
      color="error">
      Blue
      </Button>

      <Button variant="contained"
       href="https://en.wikipedia.org/wiki/Black"
       target="_blank"
       rel="noopener noreferrer"
      color="black">
      Black
      </Button>

      </header>
    </div>
  );
}

export default App;
