import React, { Component } from "react";
import "../style/dashboard.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";
import AuthNavbar from "./AuthNavbar";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <AuthNavbar />
        <div className="row ">
          <div className="col-md-8 offset-md-3 searchDiv">
            <div className="search-form">
              <form className="searchForm">
                <FontAwesomeIcon icon={faSearch} className="formSearchIcon" />
                <input
                  type="search"
                  placeholder="Search..."
                  autoComplete="off"
                  className="searchBar"
                />
              </form>
            </div>
          </div>
        </div>
        <div className="contDiv">
          <Card />
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
