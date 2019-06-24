import React, { Component } from "react";
import image from "../../images/undraw_online_discussion_5wgl.svg";
import "../../style/login.css";
import NavBar from "../AuthNavbar";
class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      username: this.state.username,
      password: this.state.password
    });
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
                <form className="form" onSubmit={this.handleLogin}>
                  <label>Username</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="loginInput"
                    placeholder="your@example.com"
                    defaultValue={this.state.username}
                  />
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="loginInput"
                    placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                    defaultValue={this.state.password}
                  />
                  <button type="submit" className="button button__accent">
                    Log in
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
