import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import "../style/navbar.css";

const NavBar = () => {
  return (
    <div>
      <Navbar expand="md" className="navDiv">
        <NavbarBrand className="navbarBrand ml-5" href="/">
          iView Labs
        </NavbarBrand>
      </Navbar>
    </div>
  );
};

export default NavBar;
