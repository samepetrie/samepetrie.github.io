import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './SidePanel.scss';

const SidePanel = () => (
  <Container fluid>
      <Row>
          <Col className="titles">
            <h1>Product Manager.</h1>
            <h1>Data Analyst.</h1>
            <h1>Enigmatologist.</h1>
            <h5>Charlotte, NC</h5>
          </Col>
      </Row>
      <Row>
        <Col className="details">
            <p>Hi! I'm Sam. Take a look around at my adventure so far, then get in touch to learn more!</p>
        </Col>
      </Row>
      <Row className="justify-content-md-center align-middle">
        <Col md="auto"><button id="detailContact">Contact Sam</button></Col>
      </Row>
  </Container>
)

export default SidePanel