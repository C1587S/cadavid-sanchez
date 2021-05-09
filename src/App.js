import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col, Container } from 'react-bootstrap'

import MainPanel from './components/Main.js'
import NavMenu from './components/NavBarHeader'
import Profile from './components/Profile'


function App() {
  return (
    <div className="App">
      <Container fluid>
      <div><NavMenu /></div>
      
      <Row>
        {/* Basic Info and Contact */}
        <Col sm={4}>
        <Profile />
        </Col>
        {/* Main Panel */}
        <Col sm={8}> 
        <MainPanel />
        </Col>
      </Row>
      </Container>
    </div>
  );
}

export default App;
