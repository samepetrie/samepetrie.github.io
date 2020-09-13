import React, {Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTooltip, VictoryLegend, VictoryVoronoiContainer, VictoryLabel } from 'victory';
import './App.scss';
import SidePanel from '../sidePanel/SidePanel';
import Canvas from '../canvas/Canvas';
import Header from '../canvas/Header';
import work from '../../data/Timeline.json';
import Archetypes from '../charts/Archetypes';
import TechStack from '../charts/TechStack';
import '../charts/Timeline.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.clicked = this.updateClicked.bind(this);
    this.state = {
      filteredData: {},
      externalMutations: undefined
    };
  }

  updateClicked(datum, index) {
    this.setState({
      filteredData: datum,
      externalMutations: [
        {
          childName: "timeline",
          target: ["data"],
          eventKey: index.toString(),
          mutation: () => ({style: {fill: "#FFDDD2", stroke:"#393D3F"}})
        }
      ]
    });
  }

  render() {
    return (
      <Container className="AppContainer" fluid>
        <Row className="Header">
          <Col><Header /></Col>
        </Row>
        <Row className="Canvas">
          <Col id="canvas">
            <Container fluid className="Canvas">
              <Row className="Timeline" id="Summary">
                <Col>
                  <Container fluid>
                    <Row className="TimelineChart">
                      <Col>
                        <VictoryChart 
                          containerComponent={
                            <VictoryVoronoiContainer 
                              radius = {2} 
                            />
                          }
                          style={{
                            parent: {
                              background: "#FFFFFF",
                              borderRadius: "6px",
                              cursor: "pointer"
                            }
                          }}
                          width={1000}
                          externalEventMutations={this.state.externalMutations}
                          events={[
                            {
                              target: "data",
                              childName: "timeline",
                              eventHandlers: {
                                onClick: (event, data) => {
                                  this.clicked(data.datum, data.index);
                                  return [
                                    {
                                      target: "data",
                                      eventKey: "all",
                                      mutation: (props) => {
                                        return props.datum.index === this ? {style: {fill:"#FFDDD2"}} : {style: undefined}
                                      }
                                    }
                                  ]
                                }
                              }
                            }
                          ]}
                          >
                            <VictoryLabel 
                              text="Timeline" 
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
                          <VictoryLegend x={800} y={15}
                            orientation="horizontal"
                            gutter={20}
                            style={{ title: {fontSize: 14} }}
                            data={[
                              { name: "Education", symbol: { fill: "#83C5BE", type: "square"} },
                              { name: "Work", symbol: { fill: "#006D77", type: "square"} },
                            ]}
                          />
                          <VictoryAxis
                            dependentAxis
                            scale="time"
                            tickValues={
                              [
                                new Date(2014, 1, 1), 
                                new Date(2015, 1, 1), 
                                new Date(2016, 1, 1), 
                                new Date(2017, 1, 1), 
                                new Date(2018, 1, 1),
                                new Date(2019, 1, 1),
                                new Date(2020, 1, 1),
                                new Date(2021, 1, 1)
                              ]
                            }
                            tickFormat={
                              (x) => { return x.getFullYear();
                              }
                            }
                          />
                          <VictoryBar
                            name = "timeline"
                            scale={{ x: "linear", y: "time" }}
                            horizontal
                            domain={{ y: [new Date(2014, 1, 1), new Date(2021, 1, 1)], x: [0, 3.5] }}
                            data={work}
                            style={{ 
                              data: { 
                                fill: ({ datum }) => datum.fill
                              }, 
                              labels: {
                                fontSize: 14,
                                fill: "#393D3F",
                                fontFamily: "Quicksand"
                              }
                            }}
                            barWidth={15}
                            x="category"
                            y={(d) => new Date(d.start_date)}
                            y0={(d) => new Date(d.end_date)}
                            labels={({ datum }) => `${datum.role} \n ${datum.org}`}
                            labelComponent={ 
                              <VictoryTooltip 
                                dy={15} 
                                constrainToVisibleArea
                                orientation="bottom" 
                                pointerLength={0}
                                flyoutStyle={{ fill: "#F4F4F9", stroke: "#006D77"}}
                              /> 
                            }
                          />
                        </VictoryChart>
                      </Col>
                    </Row>
                  </Container>
                </Col>
              </Row>
              <Row className="RolesAndSkills">
                <Col><Archetypes data={this.state.filteredData} /></Col>
                <Col><TechStack data={this.state.filteredData} /></Col>
              </Row>
            </Container>
            {/* <Canvas data={this.state.filteredData} /> */}
          </Col>
          <Col id="sidePanel">
            <SidePanel data={this.state.filteredData} />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App;
// ReactDOM.render(<App/>, mountNode)
