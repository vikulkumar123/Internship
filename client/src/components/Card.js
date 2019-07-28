import React, { Component } from "react";
import "../style/card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { archiveDeveloper } from "../redux/actions/developerAction";
import BlacklistModal from "./BlacklistModal";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      archive: true,
      isModalOpen: false,
      id: null,
      developerID: ""
    };
  }

  toggle = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  };

  showModal = developerID => {
    this.setState({
      isModalOpen: true,
      developerID
    });
  };

  toggleArchive = () => {
    this.setState({
      archive: !this.state.archive
    });
  };

  render() {
    return (
      <div className="row">
        {this.props.developers.map(developer => (
          <div className="col-md-3 col-sm-6 mb-4" key={developer._id}>
            <div className="card">
              <div className="card-body">
                <div className="card-title mb-2">
                  <span className="mr-2">
                    {developer.firstname} {developer.lastname}
                  </span>
                  {developer.isblacklisted ? (
                    <FontAwesomeIcon
                      icon={faEdit}
                      className="disabledEditActionButton"
                    />
                  ) : (
                    <Link
                      to={`/edit/${developer._id}`}
                      className="editActionButton"
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </Link>
                  )}
                </div>
                <div
                  className="card-subtitle mb-2 text-primary"
                  style={{ fontSize: "14px" }}
                >
                  <span>{developer.category}</span>
                </div>
                <div className="card-subtitle mb-2 text-muted">
                  <span>
                    {developer.skills.map(skill => {
                      return skill.label + ",  ";
                    })}
                  </span>
                </div>
              </div>
              <div className="cardFooter row">
                <div className="archiveButton col-6">
                  <button
                    className="cardActionButton"
                    onClick={() =>
                      this.props.archiveDeveloper(developer._id, {
                        archive: this.state.archive
                      })
                    }
                    disabled={developer.isblacklisted}
                  >
                    Archive
                  </button>
                </div>
                <div className="seperater col-1" />
                <div className="blacklistButton col-5">
                  <button
                    className="cardActionButton"
                    onClick={() => this.showModal(developer._id)}
                    disabled={developer.isblacklisted}
                  >
                    Blacklist
                  </button>
                  {this.state.isModalOpen ? (
                    <BlacklistModal
                      toggle={this.toggle}
                      id={this.state.developerID}
                    />
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
  { archiveDeveloper }
)(Card);
