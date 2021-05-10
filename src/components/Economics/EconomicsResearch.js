// src/components/EconomicsResearch.js

import React from 'react'
import Eco_CO20 from './Eco_CO20'
import Eco_CS18 from './Eco_CS18'
import Eco_COM18 from './Eco_COM18'
import Eco_COR18 from './Eco_COR18'
import { Row, Col, Container } from 'react-bootstrap'

function EconomicsResearch() {
  return (
    <Container fluid>
      <Row>
      <Eco_CO20 />
      <Eco_CS18 />
      <Eco_COM18 />
      <Eco_COR18 />
      </Row>
    </Container>
  )
}

export default EconomicsResearch;
