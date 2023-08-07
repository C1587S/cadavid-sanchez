// src/components/ResearchList.js

import React from 'react';
import DataScienceResearch from './DataScience/DataScienceResearch';
import EconomicsResearch from './Economics/EconomicsResearch';
import { Row, Container } from 'react-bootstrap'


function Research() {
  return (
    <Container fluid>
      <br />
      {/* <div><h1 class="colored_heading_h1">Research</h1></div> */}
      <br/>
      <div><h2 id="#datascience" >/data science</h2></div>
      <br/>
      <Row className="justify-content-center">
      <DataScienceResearch />
      </Row>
      <br/>
      <div><h2 id="#economics" >/economics</h2></div>
      <Row>
      <EconomicsResearch />
      </Row>
    </Container>
  )
}

export default Research;