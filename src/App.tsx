import logo from "./uvisr.png";

import "./App.css";

import SportConnection from "./components/connection/Sport";
import CultConnection from "./components/connection/Culture";
import EduConnection from "./components/connection/Education";
import SciConnection from "./components/connection/Science";
import SocConnection from "./components/connection/Social";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SportConnection url="" />
        <CultConnection url="" />
        <EduConnection url="" />
        <SciConnection url="" />
        <SocConnection url="" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          this code provided by 100kk/1nsec React developer B)
        </a>
      </header>
    </div>
  );
}

export default App;
