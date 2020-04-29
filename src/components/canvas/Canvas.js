import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Canvas.scss';
import Timeline from '../charts/Timeline';


function Canvas() {
  return (
    <Container className="Canvas">
      <Row className="Header">
        <Col md={10}>SAMANTHA E. PETRIE</Col>
        <Col md={2}><button className="ContactButton"><a href="mailto:samantha.e.petrie@gmail.com">Contact Sam</a></button></Col>
      </Row>
      <Row className="Timeline">
        <Col><Timeline /></Col>
      </Row>
    </Container>
  );
}

export default Canvas;