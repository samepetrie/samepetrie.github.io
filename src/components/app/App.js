import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.scss';
import SidePanel from '../sidePanel/SidePanel';
import Canvas from '../canvas/Canvas';
import Header from '../canvas/Header';


function App() {

  return (
    // make a side panel container (with react js file) and a main container
    <Container className="AppContainer" fluid>
      <Row className="Header">
        <Col><Header /></Col>
      </Row>
      <Row className="Canvas">
        {/* <Col md={3} id="sidePanel">
          <SidePanel />
        </Col> */}
        <Col id="canvas">
          <Canvas />
        </Col>
        <Col id="sidePanel">
          <SidePanel />
        </Col>
      </Row>
    </Container>
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload EDITSSSSS woah.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  );
}

export default App;
