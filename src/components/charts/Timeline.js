import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTooltip, VictoryLegend, VictoryVoronoiContainer, VictoryLabel, Bar } from 'victory';
import './Timeline.scss';
import work from '../../data/Timeline.json'

const edu = [{
  "category": 3,
  "role": "B.S. Computer Science",
  "org": "University of North Carolina - Chapel Hill",
  "start_date": new Date(2014, 6, 14),
  "end_date": new Date(2018, 5, 13)
}]

const Timeline = () => (
  <Container fluid>
    {/* <Row className="Section">
      <Col md={2}>
        <h2 id="sectionTitle">SUMMARY</h2>
      </Col>
      <Col md={10}>
        <div className="Divider"></div>
      </Col>
    </Row> */}
    <Row className="TimelineChart">
      <Col>
        <VictoryChart 
          containerComponent={<VictoryVoronoiContainer radius = {2}/>}
          style={{
            parent: {
              background: "#FFFFFF",
              borderRadius: "6px"
            }
          }}
          width={1000}
          >
            <VictoryLabel 
              text="Timeline" 
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
                new Date(2020, 1, 1)
              ]
            }
            tickFormat={
              (x) => { return x.getFullYear();
              }
            }
          />
          <VictoryBar
            name = "workTimeline"
            scale={{ x: "linear", y: "time" }}
            horizontal
            domain={{ y: [new Date(2014, 1, 1), new Date(2020, 1, 1)], x: [0, 3.5] }}
            data={work}
            style={{ 
              data: { 
                fill: "#006D77"
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
          <VictoryBar
            name="eduTimeline"
            domain={{ y: [new Date(2014, 1, 1), new Date(2020, 1, 1)] }}
            scale={{x: "linear", y: "time"}}
            style={{ 
              data: { 
                fill: "#83C5BE"
              },
              labels: {
                fontSize: 14,
                fill: "#393D3F",
                fontFamily: "Quicksand"
              }
            }}
            horizontal
            data={edu}
            barWidth={15}
            x="category"
            y="start_date"
            y0="end_date"
            labels={({ datum }) => `${datum.role} \n ${datum.org}`}
            labelComponent={ 
              <VictoryTooltip 
                dy={15} 
                constrainToVisibleArea
                orientation="bottom" 
                pointerLength={0}
                flyoutStyle={{ fill: "#F4F4F9", stroke: "#83C5BE"}}
              />  
            }
          />
        </VictoryChart>
      </Col>
    </Row>
  </Container>
)

export default Timeline