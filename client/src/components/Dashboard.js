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
    this.state = {
      searchInput: "",
      developers: [],
      search: false
    };
  }

  componentDidMount() {
    this.props.getDevelopers();
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      search: true
    });
    const developers = this.props.developers.filter(developer => {
      if (
        developer.firstname === this.state.searchInput ||
        developer.category === this.state.searchInput
      ) {
        if (!developer.archive && !developer.isBlacklisted) {
          return developer;
        }
      }
      return 0;
    });

    this.setState({
      developers
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    return (
      <React.Fragment>
        <AuthNavbar />
        <div className="row ">
          <div className="col-md-8 offset-md-3 searchDiv">
            <div className="search-form">
              <form className="searchForm" onSubmit={this.handleSubmit}>
                <FontAwesomeIcon icon={faSearch} className="formSearchIcon" />
                <input
                  id="searchInput"
                  type="text"
                  name="searchbar"
                  autoComplete="off"
                  placeholder="Search..."
                  className="searchBar"
                  value={this.state.searchInput}
                  onChange={this.handleChange}
                />
              </form>
            </div>
          </div>
        </div>
        <div className="contDiv">
          {this.state.search ? (
            <Card developers={this.state.developers} />
          ) : (
            <Card developers={this.props.developers} />
          )}
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
