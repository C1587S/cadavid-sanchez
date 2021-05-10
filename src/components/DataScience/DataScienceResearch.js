// src/components/EconomicsResearch.js

import React from 'react'
import DS_CMR from './DS_CMR'
import DS_ITAM from './DS_ITAM'
import { Row, Col, Container } from 'react-bootstrap'

function DataScienceResearch() {
  return (
    <Container fluid>
      <Row>
      <DS_CMR />
      <DS_ITAM />
      </Row>
    </Container>
  )
}


export default DataScienceResearch;
