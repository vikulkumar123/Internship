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
      reason: "",
      note: "",
      isblacklisted: true
    };
  }

  componentDidMount() {
    console.log(this.props.id);
    this.props.getDeveloper(this.props.id);
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.blacklistDeveloper(this.props.id, this.state);
    this.setState({
      reason: "",
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
                    <div className="form-group">
                      <Label htmlFor="reason" className="label">
                        Reason *
                      </Label>
                      <Input
                        id="reason"
                        type="text"
                        name="reason"
                        className="form-control"
                        placeholder="Please reason"
                        value={this.state.reason}
                        onChange={this.handleChange}
                      />
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
