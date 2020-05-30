import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Canvas.scss';
import Timeline from '../charts/Timeline';
import Responsibilities from '../charts/Responsibilities';
import TechStack from '../charts/TechStack';
import Header from './Header';
import Summary from './Summary';
import Education from './Education';
import Experience from './Experience';
import Footer from './Footer';


function Canvas() {
  return (
    <Container fluid className="Canvas">
      {/* <Row className="Header">
        <Col><Header /></Col>
      </Row> */}
      {/* <Row className="Summary" id="About">
        <Col><Summary /></Col>
      </Row> */}
      <Row className="Timeline" id="Summary">
        <Col><Timeline /></Col>
      </Row>
      <Row className="RolesAndSkills">
        <Col><Responsibilities /></Col>
        <Col><TechStack /></Col>
      </Row>
      {/* <Row className="Education" id="Education">
        <Col><Education /></Col>
      </Row>
      <Row className="Experience" id="Experience">
        <Col><Experience /></Col>
      </Row>
      <Row className="Footer">
        <Col><Footer /></Col>
      </Row> */}
    </Container>
  );
}

export default Canvas;