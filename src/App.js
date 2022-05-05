import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from './style';

import Home from './page/home';
import SolarSystem from './page/solar--system/SolarSystem';
import Missions from './page/missions/Missions';

class App extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Router>
          <Routes>
            <Route exact path="/" element={ <Home /> } />
            <Route path="/Planets" element={ <SolarSystem /> } />
            <Route path="/Missions" element={ <Missions /> } />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
