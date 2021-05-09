import logo from './logo.svg';
import './App.css';
import './components/Main.js'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col, Container } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Container fluid>
      <Row>
        <Col sm={4}>sm=4</Col>
        <Col sm={8}>sm=8</Col>
      </Row>
      </Container>
    </div>
  );
}

export default App;
