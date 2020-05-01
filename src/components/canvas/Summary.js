import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import ContactPhoto from '../../images/ContactPhoto.png';
import './Summary.scss';

const Summary = () => (
    <Container fluid>
        <Row>
            <Col md={3} className="ContactPhoto">
                <Image src={ContactPhoto} roundedCircle/>
            </Col>
            <Col md={9}>
                <p id="greeting">Hi there! I'm Sam.</p><br />
                <p id="summary-text">I think all data has a story to tell. By aligning the pieces, a powerful new reality is revealed.<br /><br />
                    I turn these stories into innovative products.
                </p>
            </Col>
        </Row>
    </Container>
)

export default Summary