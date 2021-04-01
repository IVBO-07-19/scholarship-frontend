import React from 'react';
import logo from './uvisr.png';
import './App.css';
import CommentComponent from './components/CommentComponent';
import PostComponent from './components/PostComponent';
import RegularButton from './components/UI/RegularButton';
import SportConnectionComponent from './components/ConnectionComponents/SportConnectionComponent';
import CultureConnectionComponent from './components/ConnectionComponents/CultureConnectionComponent';
import EduConnectionComponent from './components/ConnectionComponents/EduConnectionComponent';
import ScienseConnectionComponent from './components/ConnectionComponents/ScienceConnectionComponent'

function App() {

  const date = new Date();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SportConnectionComponent />
        <CultureConnectionComponent />
        <EduConnectionComponent />
        <ScienseConnectionComponent />
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
