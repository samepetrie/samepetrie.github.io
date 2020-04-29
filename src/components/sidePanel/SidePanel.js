import React from 'react';
import { Container, Row, Col, Image, Nav } from 'react-bootstrap';
import './SidePanel.scss';
import ContactPhoto from '../../images/ContactPhoto.png';


function SidePanel() {
  return (
    // change to be more like the containers and columns. this can be one container, 3 rows stacked vertically
    <Container className="SidePanel">
      <Row className="ContactInfo">
        <Col>
          <Image className="ContactPhoto" src={ContactPhoto} roundedCircle/>
          <p>SAMANTHA E. PETRIE</p>
          <p>samantha.e.petrie@gmail.com | 
            <a href="https://www.linkedin.com/in/samanthaepetrie/" rel="noopener noreferrer" target="_blank">LinkedIn</a>
          </p>
        </Col>
      </Row>
      <Row className="NavMenu">
        <Col>
          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/home">Summary</Nav.Link>
            <Nav.Link eventKey="education-link">Education</Nav.Link>
            <Nav.Link eventKey="experience-link">Experience</Nav.Link>
            <Nav.Link eventKey="skills-link">Skills</Nav.Link>
          </Nav>
        </Col>
      </Row>
      <Row className="Quote">
        <Col>
          <p>"The only person you are destined to be is the person you decide to be."<br />- Ralph Waldo Emerson</p>
        </Col>
      </Row>
    </Container>
  );
}

export default SidePanel;