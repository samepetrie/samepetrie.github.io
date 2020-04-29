import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import ContactPhoto from '../../images/ContactPhoto.png';
import './Summary.scss';

const Summary = () => (
    <Container>
        <Row>
            <Col md={4}>
                <Image className="ContactPhoto" src={ContactPhoto} roundedCircle/>
            </Col>
            <Col md={8}>
                <p id="greeting">Hi there! I'm Sam.</p>
                <p id="summary-text">I think all data has a story to tell.<br /><br />
                    By aligning the pieces, a powerful new reality is revealed.<br /><br />
                    I turn these stories into innovative products.
                </p>
            </Col>
        </Row>
    </Container>
)

export default Summary