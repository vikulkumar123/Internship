import React, { Component } from "react";
import "../style/card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  archiveDeveloper,
  blacklistDeveloper
} from "../redux/actions/actionCreator";
import BlacklistModal from "./BlacklistModal";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      archive: true,
      isBlacklisted: true,
      isModalOpen: false
    };
  }

  toggle = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  };

  showModal = () => {
    this.setState({
      isModalOpen: true
    });
  };

  render() {
    return (
      <div className="row">
        {this.props.developers.map(developer => (
          <div className="col-md-3 col-sm-6 mb-4" key={developer._id}>
            <div className="card">
              <div className="card-body">
                <div className="card-image">
                  <img
                    src={require("../images/transparent.png")}
                    alt="profile"
                    className="profile_image"
                  />
                </div>
                <div className="card-title mb-2">
                  <span className="mr-2">
                    {developer.firstname} {developer.lastname}
                  </span>
                  <Link to={`/edit/${developer._id}`}>
                    <FontAwesomeIcon icon={faEdit} />
                  </Link>
                </div>
                <div
                  className="card-subtitle mb-2 text-primary"
                  style={{ fontSize: "14px" }}
                >
                  <span>{developer.email}</span>
                </div>
                <div className="card-subtitle mb-2 text-muted">
                  <span>{developer.phone}</span>
                </div>
              </div>
              <div className="cardFooter row">
                <div className="archiveButton col-6">
                  <button
                    className="actionButton"
                    onClick={() =>
                      this.props.archiveDeveloper(
                        developer._id,
                        (developer.archive = this.state.archive)
                      )
                    }
                  >
                    Archive
                  </button>
                </div>
                <div className="seperater col-1" />
                <div className="blacklistButton col-5">
                  <button className="actionButton" onClick={this.showModal}>
                    Blacklist
                  </button>
                  {this.state.isModalOpen ? (
                    <BlacklistModal toggle={this.toggle} />
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  developer: state.developer
});

export default connect(
  mapStateToProps,
  { archiveDeveloper, blacklistDeveloper }
)(Card);
