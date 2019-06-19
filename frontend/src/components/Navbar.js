import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import "../style/navbar.css";

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Navbar fixed="top" expand="md" className="navDiv">
          <NavbarBrand className="navbarBrand ml-4" href="/home">
            iView Labs
          </NavbarBrand>

          <Nav className="ml-auto mt-2" navbar>
            <NavItem>
              <NavLink href="/logout" className="nav-link">
                <FontAwesomeIcon icon={faSignOutAlt} />
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
