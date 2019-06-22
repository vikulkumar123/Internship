import React, { Component } from "react";
import "../style/dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";
import AuthNavbar from "./AuthNavbar";
import { connect } from "react-redux";
import {
  getDevelopers,
  archiveDeveloper
} from "../redux/actions/developerAction";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getDevelopers();
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
          <Card developers={this.props.developers} />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  developers: state.developer.developers
});

export default connect(
  mapStateToProps,
  { getDevelopers, archiveDeveloper }
)(Dashboard);
