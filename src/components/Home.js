import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col, Container } from 'react-bootstrap'

import MainPanel from './Main.js'
import NavMenu from './NavBarHeader'
import Profile from './Profile'

function Home() {
  return (
    <div className="App">
      <Container fluid>
      <div><NavMenu /></div>
      
      <Row>
        {/* Basic Info and Contact */}
        <Col sm={3}>
        <Profile />
        </Col>
        {/* Main Panel */}
        <Col sm={7}> 
        <MainPanel />
        </Col>
      </Row>
      </Container>
    </div>
  );
}

export default Home;