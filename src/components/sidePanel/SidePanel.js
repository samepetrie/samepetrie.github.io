import React from 'react';
import './SidePanel.scss';
import { Nav } from 'react-bootstrap'


// Be sure to include styles at some point, probably during your bootstraping

const SidePanel = () => (
  <Nav defaultActiveKey="" className="flex-column">
    <Nav.Link href="/"><i class="material-icons">person</i>
    <span>About</span></Nav.Link>
    <Nav.Link eventKey="link-1"><i class="material-icons">equalizer</i><span>Summary</span></Nav.Link>
    <Nav.Link eventKey="link-2"><i class="material-icons">school</i><span>Education</span></Nav.Link>
    <Nav.Link eventKey="link-2"><i class="material-icons">work</i><span>Experience</span></Nav.Link>
  </Nav>
);

export default SidePanel