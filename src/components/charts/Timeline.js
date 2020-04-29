import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTooltip, VictoryLegend, VictoryVoronoiContainer, VictoryLabel } from 'victory';
import './Timeline.scss';

const work = [
  {
    "category": 2,
    "role": "Full Stack Web Devloper",
    "org": "Renaissance Computing Institute",
    "start_date": new Date(2015, 9, 21),
    "end_date": new Date(2018, 5, 31)
  },
  {
    "category": 1.5,
    "role": "Product Management Intern",
    "org": "Premier, Inc.",
    "start_date": new Date(2016, 5, 10),
    "end_date": new Date(2016, 8, 10)
  },
  {
    "category": 1.5,
    "role": "Data Visualization and Analytics Intern",
    "org": "Visa",
    "start_date": new Date(2017, 5, 10),
    "end_date": new Date(2017, 8, 10)
  },
  {
    "category": 1,
    "role": "Entrepreneurship Leadership Research and Teaching Assistant",
    "org": "Entrepreneurship Center at Kenan-Flagler Business School",
    "start_date": new Date(2017, 1, 1),
    "end_date": new Date(2018, 6, 21)
  },
  {
    "category": 2,
    "role": "Associate Business Analyst",
    "org": "Premier, Inc.",
    "start_date": new Date(2018, 7, 9),
    "end_date": new Date(2020, 1, 3)
  },
  {
    "category": 2,
    "role": "Product Implementation Manager",
    "org": "LeanTaaS",
    "start_date": new Date(2020, 1, 6),
    "end_date": new Date(2020, 4, 17)
  }
]

const edu = [{
  "category": 3,
  "role": "B.S. Computer Science",
  "org": "Unviversity of North Carolina - Chapel Hill",
  "start_date": new Date(2014, 6, 14),
  "end_date": new Date(2018, 5, 13)
}]

const Timeline = () => (
  <VictoryChart 
    containerComponent={<VictoryVoronoiContainer radius = {2}/>}
    style={{
      parent: {
        background: "#FFFFFF"
      }
    }}
    width={800}
    >
    <VictoryLabel x={15} y={40} text="Where I've been so far..." style={{fontFamily: "inherit",
        fontSize: 20}} />
    <VictoryLegend x={600} y={50}
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
      scale={{ x: "linear", y: "time" }}
      horizontal
      domain={{ y: [new Date(2014, 1, 1), new Date(2020, 1, 1)], x: [0, 4] }}
      data={work}
      style={{ 
        data: { 
          fill: "#006D77"
        }, 
        labels: {
          fontSize: 12,
          fill: "#393D3F",
          fontFamily: "inherit"
        }
      }}
      barWidth={20}
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
          flyoutStyle={{ fill: "#F4F4F9", stroke: "#006D77"}}
        /> 
      }
    />
    <VictoryBar
      domain={{ y: [new Date(2014, 1, 1), new Date(2020, 1, 1)] }}
      scale={{x: "linear", y: "time"}}
      style={{ 
        data: { 
          fill: "#83C5BE"
        },
        labels: {
          fontSize: 12,
          fill: "#393D3F",
          fontFamily: "inherit"
        }
      }}
      horizontal
      data={edu}
      barWidth={20}
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
)

export default Timeline