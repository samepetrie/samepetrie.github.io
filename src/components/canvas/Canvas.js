import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Canvas.scss';
import Timeline from '../charts/Timeline';
import Header from './Header';


function Canvas() {
  return (
    <Container className="Canvas">
      <Row className="Header">
        <Col><Header /></Col>
      </Row>
      <Row className="Timeline">
        <Col><Timeline /></Col>
      </Row>
    </Container>
  );
}

export default Canvas;