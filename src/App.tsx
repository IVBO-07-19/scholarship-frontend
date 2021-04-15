import React from 'react';
import logo from './logo.svg';
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
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <SportConnectionComponent />
    //     <CultureConnectionComponent />
    //     <EduConnectionComponent />
    //     <ScienceConnectionComponent />
    //
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
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
  )
}

export default App;
