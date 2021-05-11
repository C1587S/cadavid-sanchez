// src/components/ResearchList.js

import React from 'react';
import DataScienceResearch from './DataScience/DataScienceResearch';
import EconomicsResearch from './Economics/EconomicsResearch';
import { Row, Container } from 'react-bootstrap'


function Research() {
  return (
    <Container fluid>
      <br />
      <div><h1 class="colored_heading_h1">Research</h1></div>
      <br />
      <Row className="justify-content-center">
      <div><h3 id="datascience" class="colored_heading_h3">Data Science</h3></div>
      <DataScienceResearch />
      <div><h3 id="economics" class="colored_heading_h3">Economics</h3></div>
      <EconomicsResearch />
      </Row>
    </Container>
  )
}

export default Research;