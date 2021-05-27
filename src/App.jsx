import React from 'react';
import './App.css';
// import CommentComponent from './components/CommentComponent';
// import PostComponent from './components/PostComponent';
// import RegularButton from './components/UI/RegularButton';
// import SportConnectionComponent from './components/ConnectionComponents/SportConnectionComponent';
// import CultureConnectionComponent from './components/ConnectionComponents/CultureConnectionComponent';
// import EduConnectionComponent from './components/ConnectionComponents/EduConnectionComponent';
// import ScienceConnectionComponent from './components/ConnectionComponents/ScienceConnectionComponent'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header.js';
import Information from './components/Information/Information';
import Documents from './components/Documents/Documents';
import Main from './components/Main/Main';
import Requests from './components/Requests/Requests'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Header />
          <div>
            <Switch>
              <Route exact path='/scholarship-frontend' render={()=> <Main />} />
              <Route exact path='/Information' render={()=> <Information />} />
              <Route exact path='/Documents' render={()=> <Documents />} />
              <Route exact path='/Requests' render={()=> <Requests />} />
            </Switch>
          </div>      
          
        </header>
      </div>
    </BrowserRouter>
  )
}

export default App;
