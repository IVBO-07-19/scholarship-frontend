import React from 'react';
import logo from './logo.svg';
import './App.css';
import ExampleComponent from './components/ExampleComponent';

function App() {

  const a = 76;
  const b = 76 + 54;
  const date = new Date();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world {b.toString()}
        </p>
        <ExampleComponent name="Maksim" lastName="Makushchenko" age={22} />
        <p>{date.toString()}</p>
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
