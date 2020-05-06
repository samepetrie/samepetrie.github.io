import React, { Component } from 'react';
import './SidePanel.scss';
import { Nav } from 'react-bootstrap';
import { Link, animateScroll as scroll } from "react-scroll";

export default class SidePanel extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <Nav className="flex-column" id="navbar">
        <div className="nav-content">
          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="About"
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
              >
                <i class="material-icons">person</i><span>About</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="Summary"
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
              >
                <i class="material-icons">equalizer</i><span>Summary</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="Education"
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
              >
                <i class="material-icons">school</i><span>Education</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="Experience"
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
              >
                <i class="material-icons">work</i><span>Experience</span>
              </Link>
            </li>
          </ul>
        </div>
      </Nav>
    );
  }
}