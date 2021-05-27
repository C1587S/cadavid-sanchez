import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Container } from 'react-bootstrap'

import AboutMe from './AboutMe'
import Research from './Research'

function MainPanel() {
    return (
      <div className="App">
        <Container fluid>
        <Row>
            <AboutMe />
        </Row>
        <Row>
        <div id="research"><Research /></div>
        </Row>
        </Container>
      </div>
    );
  }
  
  export default MainPanel;
  