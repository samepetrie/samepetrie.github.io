import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.scss';


const Footer = () => (
    <Container fluid>
        <Row className="Links">
            <Col>
                <a href="https://www.linkedin.com/in/samanthaepetrie">LinkedIn</a>
            </Col>
        </Row>
        <Row className="Quote">
            <Col>
                <p>"The only person you are destined to become is the person you decide to be." - Ralph Waldo Emerson</p>
            </Col>
        </Row>
    </Container>
)

export default Footer