import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './SidePanel.scss';

function SidePanel() {
  return (
    // change to be more like the containers and columns. this can be one container, 3 rows stacked vertically
    <Container className="SidePanel">
      <Row className="Quote">
        <Col>
          <p>"The only person you are destined to be is the person you decide to be."<br />- Ralph Waldo Emerson</p>
        </Col>
      </Row>
    </Container>
  );
}

export default SidePanel;