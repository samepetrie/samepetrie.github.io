import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Canvas.scss';
import Timeline from '../charts/Timeline';
import Header from './Header';
import Summary from './Summary';
import Education from './Education';
import Experience from './Experience';
import Footer from './Footer';


function Canvas() {
  return (
    <Container fluid className="Canvas">
      <Row className="Header">
        <Col><Header /></Col>
      </Row>
      <Row className="Summary">
        <Col><Summary /></Col>
      </Row>
      <Row className="Timeline">
        <Col><Timeline /></Col>
      </Row>
      <Row className="Education">
        <Col><Education /></Col>
      </Row>
      <Row className="Experience">
        <Col><Experience /></Col>
      </Row>
      <Row className="Footer">
        <Col><Footer /></Col>
      </Row>
    </Container>
  );
}

export default Canvas;