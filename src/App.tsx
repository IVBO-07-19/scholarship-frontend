import React from 'react';
import './App.css';
// import CommentComponent from './components/CommentComponent';
// import PostComponent from './components/PostComponent';
// import RegularButton from './components/UI/RegularButton';
// import SportConnectionComponent from './components/ConnectionComponents/SportConnectionComponent';
// import CultureConnectionComponent from './components/ConnectionComponents/CultureConnectionComponent';
// import EduConnectionComponent from './components/ConnectionComponents/EduConnectionComponent';
// import ScienceConnectionComponent from './components/ConnectionComponents/ScienceConnectionComponent'
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
          <Header />
          <div>
            <Route path='/Main' render={()=> <Main />} />
            <Route path='/Information' render={()=> <Information />} />
            <Route path='/Documents' render={()=> <Documents />} />
          </div>      
          
        </header>
      </div>
    </BrowserRouter>
  )
}

export default App;
