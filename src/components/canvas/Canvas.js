import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Canvas.scss';
import Timeline from '../charts/Timeline';
import Archetypes from '../charts/Archetypes';
import TechStack from '../charts/TechStack';


function Canvas() {
  return (
    <Container fluid className="Canvas">
      <Row className="Timeline" id="Summary">
        <Col><Timeline /></Col>
      </Row>
      <Row className="RolesAndSkills">
        <Col><Archetypes /></Col>
        <Col><TechStack /></Col>
      </Row>
    </Container>
  );
}

export default Canvas;