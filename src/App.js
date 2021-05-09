import logo from './logo.svg';
import './App.css';
import './components/Main.js'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Container>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      </Container>
    </div>
  );
}

export default App;
