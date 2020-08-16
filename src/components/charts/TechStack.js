import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { VictoryStack, VictoryChart, VictoryBar, VictoryVoronoiContainer, VictoryAxis, VictoryLabel } from 'victory';

// TODO: change font family of axis

const colors = ["#006D77", "#83C5BE", "#FFDDD2", "#79A1B9", "#393D3F"];

const summary = [{"x": "Summary", "y": 0.3, "label": "Java"}, {"x": "Summary", "y": 0.3, "label": "SQL"}, {"x": "Summary", "y": 0.2, "label": "Tableau"}, {"x": "Summary", "y": 0.2, "label": "Python"}]

class TechStack extends Component {
    constructor(props) {
        super(props);
        this.state = {
          filteredData: summary
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.data.tech){
              this.setState({filteredData: nextProps.data.tech})
          } else {
              this.setState({filteredData: summary});
          }
    }

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
                            textAnchor="start" 
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
                                {this.state.filteredData.map((entry, index) => (
                                        <VictoryBar 
                                        barWidth={120}
                                        data={this.state.filteredData.slice(index, index + 1)} 
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
                                            <VictoryLabel 
                                                dx={75} 
                                                dy={20}
                                                textAnchor="start"
                                                verticalAnchor="middle"
                                            />
                                        }
                                            />
                                    ))
                                }
                            </VictoryStack>
                        </VictoryChart>
                    </Col>
                </Row>
            </Container>
    }
}

export default TechStack