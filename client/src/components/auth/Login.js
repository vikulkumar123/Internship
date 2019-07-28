import React, { Component } from "react";
import image from "../../images/undraw_online_discussion_5wgl.svg";
import "../../style/login.css";
import NavBar from "../Navbar";
import { Form, FormGroup, Alert, Label, Button } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../redux/actions/authAction";
import { clearErrors } from "../../redux/actions/errorAction";

class Login extends Component {
  state = {
    username: "",
    password: "",
    msg: null
  };

  componentDidMount() {
    console.log("Authenticate", this.props.isAuthenticated);
    if (this.props.isAuthenticated) {
      console.log("Auth" + this.props.isAuthenticated);
      this.props.history.push("/dashboard");
    }
  }

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    console.log(this.props);
    if (this.props.isAuthenticated) this.props.history.push("/dashboard");
    if (error !== prevProps.error) {
      //check the register error

      if (error.id === "LOGIN_FAIL") {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }
  }

  toggle = () => {
    // clear errors

    this.props.clearErrors();
  };

  onChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;

    const user = {
      email,
      password
    };

    // attemt to login
    this.props.login(user);
    console.log(this.props);
    this.props.history.push("/dashboard");
  };
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="loginDiv">
          <div className="row">
            <div className="col-md-6 limit">
              <img src={image} alt="" />
            </div>
            <div className="col-md-6">
              <div className="auth__auth">
                <h1 className="auth__title">Access your account</h1>
                <p style={{ textAlign: "center" }}>
                  Fill in your email and password to proceed
                </p>
                {this.state.msg ? (
                  <Alert color="danger">{this.state.msg} </Alert>
                ) : null}
                <Form className="form" onSubmit={this.onSubmit}>
                  <FormGroup>
                    <Label>Email</Label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="loginInput"
                      placeholder="xyz@example.com"
                      onChange={this.onChange}
                    />
                    <Label>Password</Label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="loginInput"
                      onChange={this.onChange}
                      placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                    />
                    <Button
                      type="submit"
                      onClick={this.toggle}
                      className="button button__accent"
                    >
                      Log in
                    </Button>
                  </FormGroup>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Login.propTypes = {
  isAuthenticated: PropTypes.bool,
  error: PropTypes.object,
  login: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.eror
});

export default connect(
  mapStateToProps,
  {
    login,
    clearErrors
  }
)(Login);
