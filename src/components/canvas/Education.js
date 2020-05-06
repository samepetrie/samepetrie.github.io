import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const Education = () => (
    <Container fluid>
        <Row className="Section">
            <Col md={2}>
                <h2 id="sectionTitle">EDUCATION</h2>
            </Col>
            <Col>
                <div className="Divider"></div>
            </Col>
        </Row>
        <Row>
            <Col>
                <p>University of North Carolina at Chapel Hill</p><br />
            </Col>
        </Row>
    </Container>
)

export default Education