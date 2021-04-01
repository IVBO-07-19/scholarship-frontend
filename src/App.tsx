import React from 'react';
import logo from './uvisr.png';
import './App.css';
import CommentComponent from './components/CommentComponent';
import PostComponent from './components/PostComponent';
import RegularButton from './components/UI/RegularButton';
import ConnectionComponent from './components/ConnectionComponent';

function App() {

  const date = new Date();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ConnectionComponent />
        
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
