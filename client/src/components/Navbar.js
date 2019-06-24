import React, { Component, Fragment } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { NavLink as link } from "react-router-dom";
import "../style/navbar.css";
import image from "../images/create.png";
import Logout from "./auth/Logout";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    auth: PropTypes.object.isRequired
  };

  render() {
    const { isAuthenticated } = this.props.auth;

    const authNav = (
      <Fragment>
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
          <Logout />
        </NavItem>
      </Fragment>
    );

    return (
      <div>
        <Navbar fixed="top" expand="md" className="navDiv">
          <NavbarBrand className="navbarBrand ml-4" to="/dashboard" tag={link}>
            iView Labs
          </NavbarBrand>

          <Nav className="ml-auto mt-2 mr-5" navbar>
            {isAuthenticated ? authNav : ""}
          </Nav>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  null
)(NavBar);
