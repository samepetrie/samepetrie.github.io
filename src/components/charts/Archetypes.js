import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { VictoryPie, VictoryChart, VictoryAxis, VictoryVoronoiContainer, VictoryLabel } from 'victory';
import summary from '../../data/Summary.json'

const colors = ["#006D77", "#83C5BE", "#FFDDD2", "#79A1B9", "#393D3F"];

export default class Archetypes extends Component {
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
                        <VictoryLabel 
                            text="Archetypes" 
                            x={30} 
                            y={30} 
                            textAnchor="start" 
                            style={{ 
                                fontSize: 20,
                                fill: "#393D3F",
                                fontFamily: "Quicksand",
                                fontWeight: "bold"
                            }}
                        />
                        <VictoryAxis style={{ 
                            axis: {stroke: "transparent"}, 
                            ticks: {stroke: "transparent"},
                            tickLabels: { fill:"transparent"} 
                            }} 
                        />
                        {summary.map(item => (
                            <VictoryPie 
                                innerRadius={60} 
                                data={item.archetypes} 
                                colorScale={colors}
                                style={{
                                    labels: {
                                        fontSize: 14,
                                        fontFamily: "Quicksand"
                                    }
                                }}
                            />
                        ))}
                    </VictoryChart>
                </Col>
            </Row>
        </Container>
    }
}