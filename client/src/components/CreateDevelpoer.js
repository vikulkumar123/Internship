import React, { Component } from "react";
import AuthNavbar from "./AuthNavbar";
import * as EmailValidator from "email-validator";
import "../style/register.css";
class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      content: "",
      message: "",

      errors: {
        firstname: "",
        lastname: "",
        email: "",
        content: "",
        message: "",
        disabled: true
      }
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    console.log(this.state);
    e.preventDefault();

    this.setState({
      firstname: "",
      lastname: "",
      email: "",
      content: "",
      message: "",
      errors: {
        firstname: "",
        lastname: "",
        email: "",
        content: "",
        message: "",
        disabled: true
      }
    });
  };

  handleBlur = e => {
    const { errors, ...inputs } = this.state;
    this.validation(inputs);
  };

  validation = ({ firstname, lastname, email, content, message }) => {
    const errors = {
      firstname: "",
      lastname: "",
      email: "",
      content: "",
      message: ""
    };
    if (firstname.length === 0) {
      errors.firstname = "Firstname can not be empty.";
      errors.disabled = true;
    } else if (lastname.length === 0) {
      errors.lastname = "Lastname can not be empty.";
      errors.disabled = true;
    } else if (!EmailValidator.validate(email) || email.length === 0) {
      errors.email = "Please enter valid e-mail address";
      errors.disabled = true;
    } else if (content.length === 0) {
      errors.content = "Content field can not be null";
      errors.disabled = true;
    } else if (message.length === 0) {
      errors.message = "Message can not be empty.";
      errors.disabled = true;
    }

    this.setState({ errors });
    return errors;
  };

  render() {
    return (
      <React.Fragment>
        <AuthNavbar />

        <section className="section">
          <div className="container">
            <h3>Create Developer Profile</h3>
            <div className="row">
              <div className="col-md-6  offset-md-3" data-wow-delay=".2s">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="firstname" className="label">
                        First Name *
                      </label>
                      <input
                        id="firstname"
                        type="text"
                        name="firstname"
                        className="form-control"
                        placeholder="Please enter firstname"
                        value={this.state.firstname}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                      />
                      <div>{this.state.errors.firstname}</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="lastname" className="label">
                        Last Name *
                      </label>
                      <input
                        id="lastname"
                        type="text"
                        name="lastname"
                        className="form-control"
                        placeholder="Please enter Surname "
                        value={this.state.lastname}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                      />
                      <div>{this.state.errors.lastname}</div>
                    </div>
                  </div>
                </div>
                {/* Email */}
                <div className="form-group label-floating">
                  <label htmlFor="email" className="label">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Please enter Email *"
                    value={this.state.email}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                  />
                  <div>{this.state.errors.email}</div>
                </div>

                {/* Phone Number */}

                <div className="form-group label-floating">
                  <label htmlFor="phone" className="label">
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    type="string"
                    name="phone"
                    className="form-control"
                    placeholder="Please enter your phone number *"
                    value={this.state.phone}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                  />
                  <div>{this.state.errors.phone}</div>
                </div>

                {/* Skills */}
                <div className="form-group label-floating">
                  <label htmlFor="skills" className="label">
                    Skills *
                  </label>
                  <input
                    id="skills"
                    type="string"
                    name="skills"
                    className="form-control"
                    placeholder="Please enter skills *"
                    value={this.state.skills}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                  />
                  <div>{this.state.errors.skills}</div>
                </div>

                {/* Score & Experience */}

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="score" className="label">
                        Score *
                      </label>
                      <input
                        id="score"
                        type="number"
                        name="score"
                        className="form-control"
                        placeholder="Please enter score *"
                        value={this.state.score}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                      />
                      <div className="">{this.state.errors.score}</div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="experience" className="label">
                        Experience *
                      </label>
                      <input
                        id="experience"
                        type="number"
                        name="experience"
                        className="form-control"
                        placeholder="Please enter experience *"
                        value={this.state.experience}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                      />
                      <div>{this.state.errors.experience}</div>
                    </div>
                  </div>
                </div>

                {/* Catgory */}

                <label htmlFor="category" className="label">
                  Catagory*
                </label>
                <div className="form-group">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-3">
                          <input
                            id="category"
                            type="radio"
                            name="category"
                            className="form-control"
                            value={this.state.category}
                            onChange={this.handleChange}
                            onBlur={this.handleBlur}
                          />
                        </div>
                        <div className="col-md-9">
                          <span>Consultant</span>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-3">
                          <input
                            id="category"
                            type="radio"
                            name="category"
                            className="form-control"
                            value={this.state.category}
                            onChange={this.handleChange}
                            onBlur={this.handleBlur}
                          />
                        </div>
                        <div className="col-md-9">
                          <span>Freelancer</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-3">
                          <input
                            id="category"
                            type="radio"
                            name="category"
                            className="form-control"
                            value={this.state.category}
                            onChange={this.handleChange}
                            onBlur={this.handleBlur}
                          />
                        </div>
                        <div className="col-md-9">
                          <span>Inhouse team</span>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-3">
                          <input
                            id="category"
                            type="radio"
                            name="category"
                            className="form-control"
                            value={this.state.category}
                            onChange={this.handleChange}
                            onBlur={this.handleBlur}
                          />
                        </div>
                        <div className="col-md-9">
                          <span>Remote worker</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>{this.state.errors.category}</div>
                </div>

                {/* Location and Reference */}

                <div className="row">
                  <div className="col-md-6">
                    <label htmlFor="location" className="label">
                      Location *
                    </label>
                    <input
                      id="location"
                      type="string"
                      name="location"
                      className="form-control"
                      placeholder="Please enter location *"
                      value={this.state.location}
                      onChange={this.handleChange}
                      onBlur={this.handleBlur}
                    />

                    <div className="">{this.state.errors.location}</div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="content" className="label">
                        Reference *
                      </label>
                      <input
                        id="content"
                        type="string"
                        name="content"
                        className="form-control"
                        placeholder="Enter reference*"
                        value={this.state.content}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                      />
                      <div>{this.state.errors.content}</div>
                    </div>
                  </div>
                </div>

                {/* Contract */}
                <label htmlFor="contract" className="label">
                  Contract *
                </label>
                <div className="form-group">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-3">
                          <input
                            id="category"
                            type="radio"
                            name="category"
                            className="form-control"
                            value={this.state.category}
                            onChange={this.handleChange}
                            onBlur={this.handleBlur}
                          />
                        </div>
                        <div className="col-md-9">
                          <span>Freelancer</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-3">
                          <input
                            id="category"
                            type="radio"
                            name="category"
                            className="form-control"
                            value={this.state.category}
                            onChange={this.handleChange}
                            onBlur={this.handleBlur}
                          />
                        </div>
                        <div className="col-md-9">
                          <span>Freelancer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="">{this.state.errors.contract}</div>
                </div>
                {/* Git Link */}
                <div className="form-group label-floating">
                  <label htmlFor="github" className="label">
                    GitHub *
                  </label>
                  <input
                    id="github"
                    type="url"
                    name="github"
                    className="form-control"
                    placeholder="Please enter your Github link *"
                    value={this.state.github}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                  />
                  <div>{this.state.errors.github}</div>
                </div>

                {/* LinkedIn Link */}
                <div className="form-group label-floating">
                  <label htmlFor="linkedin" className="label">
                    LinkedIn *
                  </label>
                  <input
                    id="linkedin"
                    type="url"
                    name="linkedin"
                    className="form-control"
                    placeholder="Please enter your LinkedIn link *"
                    value={this.state.linkedin}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                  />
                  <div>{this.state.errors.linkedin}</div>
                </div>

                <div className="form-submit mt-5">
                  <button
                    className="btn3"
                    type="submit"
                    disabled={this.state.errors.disabled}
                  >
                    Send
                  </button>
                  <div id="msgSubmit" className="h3 text-center hidden" />
                  <div className="clearfix" />
                  <p style={{ marginTop: "-1%" }}>*These field are required</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default ContactUs;
