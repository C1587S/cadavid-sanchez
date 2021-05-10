// src/components/ResearchList.js

import React from 'react';
import DataScienceResearch from './DataScience/DataScienceResearch';
import EconomicsResearch from './Economics/EconomicsResearch';
import { Row, Col, Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'


function Research() {
  return (
    <Container fluid>
      <br />
      <div>
        <h2>Research</h2>
      </div>
      <br />
      <Row className="justify-content-center">
      {/* <DataScienceResearch /> */}
      <div><h3>Economics</h3></div>
      <EconomicsResearch />
      </Row>
    </Container>
  )
}

export default Research;