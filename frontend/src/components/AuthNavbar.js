import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { NavLink as link } from "react-router-dom";
import "../style/navbar.css";
import image from "../images/create.png";
export default class AuthNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Navbar fixed="top" expand="md" className="navDiv">
          <NavbarBrand className="navbarBrand ml-4" to="/dashboard" tag={link}>
            iView Labs
          </NavbarBrand>

          <Nav className="ml-auto mt-2 mr-5" navbar>
            <NavItem>
              <NavLink to="/register" className="nav-link mr-5" tag={link}>
                <img
                  src={image}
                  style={{ width: "25px", height: "25px", marginRight: "10px" }}
                  alt="register"
                />
                <span>Create</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/logout" className="nav-link" tag={link}>
                <FontAwesomeIcon icon={faSignOutAlt} />
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
