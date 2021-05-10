// src/components/ResearchList.js

import React from 'react';
import DataScienceResearch from './DataScience/DataScienceResearch';
import EconomicsResearch from './Economics/EconomicsResearch';
import { Row, Col, Container } from 'react-bootstrap'

function Research() {
  return (
    <Container fluid>
      <Row>
      {/* <h1 align="justify">Research Interests</h1> */}
      {/* <p>My research focuses on Computational Social Sciences for Economic and Social Development.</p> */}
      <DataScienceResearch />
      <EconomicsResearch />
      </Row>
    </Container>
  )
}

export default Research;