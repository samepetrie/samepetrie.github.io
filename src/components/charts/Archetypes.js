import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { VictoryPie, VictoryChart, VictoryAxis, VictoryVoronoiContainer, VictoryLabel } from 'victory';

const colors = ["#006D77", "#83C5BE", "#FFDDD2", "#79A1B9", "#393D3F"];

const summary = [{"x": "Data Analyst", "y": 0.4}, {"x": "Product Manager", "y": 0.3}, {"x": "Business Analyst", "y": 0.2}, {"x": "Software Developer", "y": 0.1}];

class Archetypes extends Component {
    constructor(props) {
        super(props);
        this.state = {
          filteredData: summary
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.data.archetypes){
              this.setState({filteredData: nextProps.data.archetypes})
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
                        <VictoryPie 
                            innerRadius={60} 
                            data={this.state.filteredData} 
                            colorScale={colors}
                            style={{
                                labels: {
                                    fontSize: 14,
                                    fontFamily: "Quicksand"
                                }
                            }}
                        />
                    </VictoryChart>
                </Col>
            </Row>
        </Container>
    }
}

export default Archetypes