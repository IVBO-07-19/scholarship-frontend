import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Information from './components/Information/Information';
import Documents from './components/Documents/Documents';
import Main from './components/Main/Main';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Header></Header>
          <div>
            <Route path='/Main' render={()=> <Main />} />
            <Route path='/Information' render={()=> <Information />} />
            <Route path='/Documents' render={()=> <Documents />} />
          </div>      
          
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
