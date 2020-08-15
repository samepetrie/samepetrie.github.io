import React, {Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './SidePanel.scss';

function formatDate(start, end) {
  // if start is null, default to June 1996
  // if end is null, default to Present
  var startString = "June 1996";
  var endString = "Present";

  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  if (start != null) {
    var startDate = new Date(start);

    // parse start date
    var startMonth = months[startDate.getMonth()];
    var startYear = startDate.getFullYear();
    var startString = startMonth + ' ' + startYear;
  }

  if (end != null) {
    var endDate = new Date(end);
    var endMonth = months[endDate.getMonth()];
    var endYear = endDate.getFullYear();
    endString = endMonth + ' ' + endYear;
  }

  return startString + ' - ' + endString;
}

class SidePanel extends Component {
  render(){
    return(
      <Container fluid>
        <Row>
          <Col className="titles">
            <h1>{(this.props.data.role || "Product Manager. Data Analyst. Enigmatologist.")}</h1>
            <h5 id="location">{(this.props.data.org|| "Charlotte, NC")}</h5>
            <h5 id="duration">{(formatDate(this.props.data.start_date, this.props.data.end_date))}</h5>
          </Col>
        </Row>
        <Row>
         <Col className="details">
             <p>{(this.props.data.description || "Hi! I'm Sam. Take a look around at my adventure so far, then get in touch to learn more.")}</p>
         </Col>
       </Row>
       {/* <Row className="justify-content-md-center align-middle">
         <Col md="auto"><button id="detailContact"><a href="mailto:hello@samepetrie.com">Contact Sam</a></button></Col>
       </Row> */}
      </Container>
    );
}
}

// const SidePanel = () => (
//   <Container fluid>
//       <Row>
//           <Col className="titles">
//             <h1>Product Manager.</h1>
//             <h1>Data Analyst.</h1>
//             <h1>Enigmatologist.</h1>
//             <h5>CHARLOTTE, NC</h5>
//           </Col>
//       </Row>
//       <Row>
//         <Col className="details">
//             <p>Hi! I'm Sam. Take a look around at my adventure so far, then get in touch to learn more!</p>
//         </Col>
//       </Row>
//       <Row className="justify-content-md-center align-middle">
//         <Col md="auto"><button id="detailContact"><a href="mailto:hello@samepetrie.com">Contact Sam</a></button></Col>
//       </Row>
//   </Container>
// )

export default SidePanel