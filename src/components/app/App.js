import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.scss';
import SidePanel from '../sidePanel/SidePanel';
import Canvas from '../canvas/Canvas';
import Header from '../canvas/Header';
import work from '../../data/Timeline.json'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      externalMutations: undefined,
      filteredData: []
    };
  }

  removeMutation() {
    this.setState({
      externalMutations: undefined
    });
  }

  filterData() {
    this.setState({
      externalMutations: [
        {
          childName: ["workTimeline", "eduTimeline"],
          target: ["data"],
          eventKey: "all",
          mutation: () => ({ style: undefined }),
          callback: this.removeMutation.bind(this)
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
            <Canvas data={this.state.filteredData} />
          </Col>
          <Col id="sidePanel">
            <SidePanel />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App;
// ReactDOM.render(<App/>, mountNode)
