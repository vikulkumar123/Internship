import React, { Component } from "react";
import "../style/modal.css";
import { Form, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import {
  blacklistDeveloper,
  getDeveloper
} from "../redux/actions/developerAction";
import PropTypes from "prop-types";
class BlacklistModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reason: "Reason1",
      note: "",
      isblacklisted: true
    };
  }

  componentDidMount() {
    this.props.getDeveloper(this.props.id);
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleOptionChange = e => {
    this.setState({
      reason: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.blacklistDeveloper(this.props.id, this.state);
    this.setState({
      reason: "Reason1",
      note: ""
    });
  };

  render() {
    return (
      <div className="overlay">
        <div className="overlay-backdrop" />
        <div className="overlay-wrapper">
          <div className="overlay-modal">
            <div className="dialog-container">
              <div className="news-dialog">
                <div className="header">
                  <h3>Blacklist Developer</h3>
                  <button className="icon-button" onClick={this.props.toggle}>
                    <span>X</span>
                  </button>
                </div>
                <div className="dialog-content">
                  <Form className="form" onSubmit={this.handleSubmit}>
                    <label htmlFor="category" className="label">
                      Reason for blacklist*
                    </label>
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-3 paddingRadio">
                          <div className="row">
                            <div className="col-md-3 paddingRadio">
                              <input
                                id="reason1"
                                type="radio"
                                name="reason"
                                className="form-control"
                                value="Reason1"
                                checked={this.state.reason === "Reason1"}
                                onChange={this.handleOptionChange}
                              />
                            </div>
                            <div className="col-md-9 paddingRadio">
                              <span>Reason1</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 paddingRadio">
                          <div className="row">
                            <div className="col-md-3 paddingRadio">
                              <input
                                id="reason2"
                                type="radio"
                                name="reason"
                                className="form-control"
                                value="Reason2"
                                checked={this.state.reason === "Reason2"}
                                onChange={this.handleOptionChange}
                              />
                            </div>
                            <div className="col-md-9 paddingRadio">
                              <span>Reason2</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 paddingRadio">
                          <div className="row">
                            <div className="col-md-3 paddingRadio">
                              <input
                                id="reason3"
                                type="radio"
                                name="reason"
                                className="form-control"
                                value="Reason3"
                                checked={this.state.reason === "Reason3"}
                                onChange={this.handleOptionChange}
                              />
                            </div>
                            <div className="col-md-9 paddingRadio">
                              <span>Reason3</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 paddingRadio">
                          <div className="row">
                            <div className="col-md-3 paddingRadio">
                              <input
                                id="reason4"
                                type="radio"
                                name="reason"
                                className="form-control"
                                value="Reason4"
                                checked={this.state.reason === "Reason4"}
                                onChange={this.handleOptionChange}
                              />
                            </div>
                            <div className="col-md-9 paddingRadio">
                              <span>Reason4</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <Label htmlFor="note" className="label">
                        Notes
                      </Label>
                      <Input
                        id="note"
                        type="text"
                        name="note"
                        className="form-control"
                        placeholder="Enter notes..."
                        value={this.state.note}
                        onChange={this.handleChange}
                      />
                    </div>
                    <button className="button11">
                      <span>Blacklist</span>
                    </button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

BlacklistModal.propTypes = {
  developer: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  developer: state.developer
});

export default connect(
  mapStateToProps,
  { blacklistDeveloper, getDeveloper }
)(BlacklistModal);
