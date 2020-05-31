import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { VictoryStack, VictoryChart, VictoryBar, VictoryVoronoiContainer, VictoryAxis, VictoryLabel } from 'victory';
import work from '../../data/Timeline.json'
import summary from '../../data/Summary.json'

// have prop from canvas if timeline is filtered to a role, then pass this as "work" data
// if there is no filter, show summary
// TODO: change font family of axis

const colors = ["#006D77", "#83C5BE", "#FFDDD2", "#79A1B9", "#393D3F"];

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
                        <VictoryLabel 
                            text="Tech Stack" 
                            x={30} 
                            y={30} 
                            textAnchor="left" 
                            style={{ 
                                fontSize: 20,
                                fill: "#393D3F",
                                fontFamily: "Quicksand",
                                fontWeight: "bold"
                            }}
                        />
                        <VictoryAxis />
                            <VictoryStack
                                domainPadding={{x: [0, 0], y: 10}}
                            >
                                {summary.map(item => (
                                    item.tech.map((entry, index) => (
                                        <VictoryBar 
                                        barWidth={120}
                                        data={item.tech.slice(index, index + 1)} 
                                        style={{
                                            data: {
                                                fill: colors[index]
                                            },
                                            labels: {
                                                fontSize: 14,
                                                fontFamily: "Quicksand"
                                            }
                                        }}
                                        labelComponent={ 
                                            // <VictoryTooltip 
                                            //     dx={100}
                                            //     constrainToVisibleArea
                                            //     orientation="bottom" 
                                            // //   pointerLength={0}
                                            //     flyoutStyle={{ fill: "transparent", stroke: "transparent"}}
                                            // /> 
                                            <VictoryLabel 
                                                dx={75} 
                                                dy={20}
                                                textAnchor="left"
                                                verticalAnchor="middle"
                                            />
                                        }
                                            />
                                    ))
                                ))}
                            </VictoryStack>
                        </VictoryChart>
                    </Col>
                </Row>
            </Container>
    }
}