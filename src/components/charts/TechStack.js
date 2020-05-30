import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { VictoryStack, VictoryChart, VictoryBar, VictoryTooltip, VictoryLegend, VictoryVoronoiContainer, VictoryLabel } from 'victory';
import work from '../../data/Timeline.json'

// X Values should be constant...labels are the name of the technology
// for each item in tech list, make a VictoryBar object of it
// maybe take average of the various tech used for the roles for a summary value

const tech = [{"x":1, "y": 0.6, "label": "Javascript"}];
const tech1 = [{"x":1, "y": 0.3, "label": "Excel"}];
const tech2 = [{"x": 1, "y": 0.1, "label": "PHP"}];

export default class TechStack extends Component {
    render(){
        return <Container fluid>
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
                            <VictoryStack
                            colorScale={["#006D77", "#83C5BE", "#FFDDD2", "#79A1B9", "#393D3F"]}
                            >
                                {work.map(item => (
                                        item.tech.map((entry, index) => (
                                            <VictoryBar data={item.tech.slice(index, index + 1)} />
                                        ))
                                ))}
                            </VictoryStack>
                        </VictoryChart>
                    </Col>
                </Row>
            </Container>
    }
}