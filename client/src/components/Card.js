import React, { Component } from "react";
import "../style/card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-3 col-sm-6 mb-4">
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
                <span className="mr-2">Shubham Singh</span>
                <Link to="/edit">
                  <FontAwesomeIcon icon={faEdit} />
                </Link>
              </div>
              <div
                className="card-subtitle mb-2 text-primary"
                style={{ fontSize: "14px" }}
              >
                <span>shubhamsingh4204@gmail.com</span>
              </div>
              <div className="card-subtitle mb-2 text-muted">
                <span>9119637832</span>
              </div>
            </div>
            <div className="cardFooter row">
              <div className="archiveButton col-6">
                <a className="actionButton" href="/archive/:userId">
                  Archive
                </a>
              </div>
              <div className="seperater col-1" />
              <div className="blacklistButton col-5">
                <a className="actionButton" href="/blacklist/:userId">
                  Blacklist
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
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
                <span className="mr-2">Shubham Singh</span>
                <Link to="/edit">
                  <FontAwesomeIcon icon={faEdit} />
                </Link>
              </div>
              <div
                className="card-subtitle mb-2 text-primary"
                style={{ fontSize: "14px" }}
              >
                <span>shubhamsingh4204@gmail.com</span>
              </div>
              <div className="card-subtitle mb-2 text-muted">
                <span>9119637832</span>
              </div>
            </div>
            <div className="cardFooter row">
              <div className="archiveButton col-6">
                <a className="actionButton" href="/archive/:userId">
                  Archive
                </a>
              </div>
              <div className="seperater col-1" />
              <div className="blacklistButton col-5">
                <a className="actionButton" href="/blacklist/:userId">
                  Blacklist
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
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
                <span className="mr-2">Shubham Singh</span>
                <Link to="/edit">
                  <FontAwesomeIcon icon={faEdit} />
                </Link>
              </div>
              <div
                className="card-subtitle mb-2 text-primary"
                style={{ fontSize: "14px" }}
              >
                <span>shubhamsingh4204@gmail.com</span>
              </div>
              <div className="card-subtitle mb-2 text-muted">
                <span>9119637832</span>
              </div>
            </div>
            <div className="cardFooter row">
              <div className="archiveButton col-6">
                <a className="actionButton" href="/archive/:userId">
                  Archive
                </a>
              </div>
              <div className="seperater col-1" />
              <div className="blacklistButton col-5">
                <a className="actionButton" href="/blacklist/:userId">
                  Blacklist
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
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
                <span className="mr-2">Shubham Singh</span>
                <Link to="/edit">
                  <FontAwesomeIcon icon={faEdit} />
                </Link>
              </div>
              <div
                className="card-subtitle mb-2 text-primary"
                style={{ fontSize: "14px" }}
              >
                <span>shubhamsingh4204@gmail.com</span>
              </div>
              <div className="card-subtitle mb-2 text-muted">
                <span>9119637832</span>
              </div>
            </div>
            <div className="cardFooter row">
              <div className="archiveButton col-6">
                <a className="actionButton" href="/archive/:userId">
                  Archive
                </a>
              </div>
              <div className="seperater col-1" />
              <div className="blacklistButton col-5">
                <a className="actionButton" href="/blacklist/:userId">
                  Blacklist
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
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
                <span className="mr-2">Shubham Singh</span>
                <Link to="/edit">
                  <FontAwesomeIcon icon={faEdit} />
                </Link>
              </div>
              <div
                className="card-subtitle mb-2 text-primary"
                style={{ fontSize: "14px" }}
              >
                <span>shubhamsingh4204@gmail.com</span>
              </div>
              <div className="card-subtitle mb-2 text-muted">
                <span>9119637832</span>
              </div>
            </div>
            <div className="cardFooter row">
              <div className="archiveButton col-6">
                <a className="actionButton" href="/archive/:userId">
                  Archive
                </a>
              </div>
              <div className="seperater col-1" />
              <div className="blacklistButton col-5">
                <a className="actionButton" href="/blacklist/:userId">
                  Blacklist
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 ">
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
                <span className="mr-2">Shubham Singh</span>
                <Link to="/edit">
                  <FontAwesomeIcon icon={faEdit} />
                </Link>
              </div>
              <div
                className="card-subtitle mb-2 text-primary"
                style={{ fontSize: "14px" }}
              >
                <span>shubhamsingh4204@gmail.com</span>
              </div>
              <div className="card-subtitle mb-2 text-muted">
                <span>9119637832</span>
              </div>
            </div>
            <div className="cardFooter row">
              <div className="archiveButton col-6">
                <a className="actionButton" href="/archive/:userId">
                  Archive
                </a>
              </div>
              <div className="seperater col-1" />
              <div className="blacklistButton col-5">
                <a className="actionButton" href="/blacklist/:userId">
                  Blacklist
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 ">
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
                <span className="mr-2">Shubham Singh</span>
                <Link to="/edit">
                  <FontAwesomeIcon icon={faEdit} />
                </Link>
              </div>
              <div
                className="card-subtitle mb-2 text-primary"
                style={{ fontSize: "14px" }}
              >
                <span>shubhamsingh4204@gmail.com</span>
              </div>
              <div className="card-subtitle mb-2 text-muted">
                <span>9119637832</span>
              </div>
            </div>
            <div className="cardFooter row">
              <div className="archiveButton col-6">
                <a className="actionButton" href="/archive/:userId">
                  Archive
                </a>
              </div>
              <div className="seperater col-1" />
              <div className="blacklistButton col-5">
                <a className="actionButton" href="/blacklist/:userId">
                  Blacklist
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 ">
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
                <span className="mr-2">Shubham Singh</span>
                <Link to="/edit">
                  <FontAwesomeIcon icon={faEdit} />
                </Link>
              </div>
              <div
                className="card-subtitle mb-2 text-primary"
                style={{ fontSize: "14px" }}
              >
                <span>shubhamsingh4204@gmail.com</span>
              </div>
              <div className="card-subtitle mb-2 text-muted">
                <span>9119637832</span>
              </div>
            </div>
            <div className="cardFooter row">
              <div className="archiveButton col-6">
                <a className="actionButton" href="/archive/:userId">
                  Archive
                </a>
              </div>
              <div className="seperater col-1" />
              <div className="blacklistButton col-5">
                <a className="actionButton" href="/blacklist/:userId">
                  Blacklist
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
