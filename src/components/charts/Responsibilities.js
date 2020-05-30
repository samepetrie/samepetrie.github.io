import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { VictoryPie, VictoryChart, VictoryAxis, VictoryTooltip, VictoryLegend, VictoryVoronoiContainer, VictoryLabel } from 'victory';

const Responsibilities = () => (
    <Container fluid>
        <Row>
            <Col>
                <VictoryChart 
                containerComponent={<VictoryVoronoiContainer radius = {2}/>}
                style={{
                    parent: {
                    background: "#FFFFFF",
                    borderRadius: "6px"
                    }
                }}
                width={500}
                >
                    <VictoryPie
                    innerRadius= "80"
                    >
                    </VictoryPie>
                </VictoryChart>
            </Col>
        </Row>
    </Container>
)

export default Responsibilities;