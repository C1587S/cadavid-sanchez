import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col, Container } from 'react-bootstrap'

function MainPanel() {
    return (
      <div className="App">
        <Container fluid>
        <Row>
            <h1>Research Interests</h1>
        </Row>
        <Row>
            <h1>Research Papers</h1>
        </Row>
        </Container>
      </div>
    );
  }
  
  export default MainPanel;
  