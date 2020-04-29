import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Header.scss';


const Header = () => (
    <Container className="HeaderContainer">
        <Row className="Header">
            <Col md={10} className="Title">
                <h1>SAMANTHA E. PETRIE</h1>
                <h5>Product Manager <span>&#183;</span> Data Analyst <span>&#183;</span> Enigmatologist</h5>
            </Col>
            <Col md={2}>
                <button className="ContactButton"><a href="mailto:samantha.e.petrie@gmail.com">Contact Sam</a>
                </button>
            </Col>
        </Row>
        <Row>
            <Col md={10}>
                <div className="Divider"></div>
            </Col>
        </Row>
    </Container>
)

export default Header