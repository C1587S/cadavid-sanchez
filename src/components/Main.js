import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col, Container } from 'react-bootstrap'

import Research from './Research'

function MainPanel() {
    return (
      <div className="App">
        <Container fluid>
        <Row>
            <Research />
        </Row>
        </Container>
      </div>
    );
  }
  
  export default MainPanel;
  