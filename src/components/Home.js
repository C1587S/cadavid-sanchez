import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavMenu from './NavBarHeader';
import Profile from './Profile';
import AboutMe from './AboutMe';
import CardsContainer from './CardContainers.js';
import Research from './Research.js';

function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const themeStyle = {
    backgroundColor: darkMode ? '#181818' : '#f5f5f5',
    color: darkMode ? '#f5f5f5' : '#808880',
  };

  return (
    <Router>
      <div style={themeStyle} className="App">
        <Container fluid>
          <NavMenu darkMode={darkMode} setDarkMode={setDarkMode} />
        <Row className="justify-content-center">
          <Col sm={1} />
          {/* Main Panel */}
          <Col>
            <Container>
              <Switch>
                <Route exact path="/">
                  <Profile darkMode={darkMode} />
                  <CardsContainer darkMode={darkMode} />
                  <AboutMe />
                </Route>
                <Route path="/research">
                  <Research />
                </Route>
              </Switch>
            </Container>
          </Col>
          <Col sm={1} />
        </Row>
        </Container>
      </div>
    </Router>
  );
}

export default Home;
