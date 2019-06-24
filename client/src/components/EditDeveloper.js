import React, { Component } from "react";
import AuthNavbar from "./AuthNavbar";
import "../style/register.css";
import { Form, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import { editDeveloper, getDeveloper } from "../redux/actions/developerAction";
import PropTypes from "prop-types";
import * as EmailValidator from "email-validator";

class EditDeveloper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      skills: "",
      score: 0,
      experience: 0,
      category: "Consultant",
      location: "",
      availability: 0,
      costPerHour: 0,
      contract: "Fixed",
      reference: "",
      email: "",
      phone: "",
      github: "",
      linkedin: "",
      archive: false,
      isBlacklist: false,

      errors: {
        firstname: "",
        lastname: "",
        skills: "",
        score: "",
        experience: "",
        location: "",
        availability: "",
        costPerHour: "",
        reference: "",
        email: "",
        phone: "",
        github: "",
        linkedin: "",
        disabled: false
      }
    };
  }

  componentDidMount() {
    this.props.getDeveloper(this.props.match.params.developerId);
  }
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleChecked = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    console.log(this.props);
    e.preventDefault();
    const {
      firstname,
      lastname,
      skills,
      score,
      experience,
      category,
      location,
      availability,
      costPerHour,
      contract,
      reference,
      email,
      phone,
      github,
      linkedin,
      archive,
      isBlacklist
    } = this.state;
    this.props.editDeveloper(this.props.match.params.developerId, {
      firstname,
      lastname,
      skills,
      score,
      experience,
      category,
      location,
      availability,
      costPerHour,
      contract,
      reference,
      email,
      phone,
      github,
      linkedin,
      archive,
      isBlacklist
    });

    this.props.history.push("/dashboard");
  };
  handleBlur = e => {
    const { errors, ...inputs } = this.state;

    this.validation(inputs);
  };

  validation = ({
    firstname,
    lastname,
    skills,
    score,
    experience,
    location,
    availability,
    costPerHour,
    reference,
    email,
    phone,
    github,
    linkedin
  }) => {
    const errors = {
      firstname: "",
      lastname: "",
      skills: "",
      score: "",
      experience: "",
      location: "",
      availability: "",
      costPerHour: "",
      reference: "",
      email: "",
      phone: "",
      github: "",
      linkedin: ""
    };

    const reg = /^\d+$/;
    const regexpUrl = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if (firstname.length === 0) {
      errors.firstname = "First Name can not be empty.";
      errors.disabled = true;
    } else if (firstname.length > 50) {
      errors.firstname = "First Name can contains atmost 50 charchters";
      errors.disabled = true;
    } else if (lastname.length === 0) {
      errors.lastname = "Last Name can not be empty.";
      errors.disabled = true;
    } else if (lastname.length > 20) {
      errors.lastname = "lastname can contains atmost 20 charchters";
      errors.disabled = true;
    } else if (!EmailValidator.validate(email) || email.length === 0) {
      errors.email = "Please enter valid e-mail address";
      errors.disabled = true;
    } else if (!reg.test(phone)) {
      errors.phone = " Phone number should contains numeric value only";
      errors.disabled = true;
    } else if (phone.length < 10 && phone.length > 10) {
      errors.phone = " Please enter a valid phone number.";
      errors.disabled = true;
    } else if (skills.length === 0) {
      errors.skills = "Please enter atleast one skill";
      errors.disabled = true;
    } else if (score < 1) {
      errors.score = "Please enter a valid score";
      errors.disabled = true;
    } else if (experience < 1) {
      errors.experience = "Please enter your experience";
      errors.disabled = true;
    } else if (availability < 1) {
      errors.availability = "Please enter a valid input.";
      errors.disabled = true;
    } else if (costPerHour < 0) {
      errors.costPerHour = "Please enter a valid amount";
      errors.disabled = true;
    } else if (location.length < 2) {
      errors.location = "Please enter a valid location!";
      errors.disabled = true;
    } else if (reference.length < 1) {
      errors.reference = "Please provide a valid Reference.";
      errors.disabled = true;
    } else if (linkedin.length < 1) {
      errors.linkedin = "Linkedin profile field can't be empty.";
      errors.disabled = true;
    } else if (!regexpUrl.test(linkedin)) {
      errors.linkedin = "Please provide a valid Linkedin profile URL.";
      errors.disabled = true;
    } else if (!regexpUrl.test(github)) {
      errors.github = "Please provide a valid Github profile URL.";
      errors.github = true;
    } else if (github.length < 1) {
      errors.github = "Github Profile can't be empty..";
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
            <h3>Developer Profile</h3>
            <Form className="form" onSubmit={this.handleSubmit}>
              <div className="row">
                <div
                  className="col-md-6 padding  offset-md-3"
                  data-wow-delay=".2s"
                >
                  <div className="row">
                    <div className="col-md-6 padding">
                      <div className="form-group">
                        <Label htmlFor="firstname" className="label">
                          First Name *
                        </Label>
                        <Input
                          id="firstname"
                          type="text"
                          name="firstname"
                          className="form-control"
                          placeholder="Please enter firstname"
                          value={
                            this.props.developer.developer
                              ? this.props.developer.developer.firstname
                              : ""
                          }
                          onChange={this.handleChange}
                          onBlur={this.handleBlur}
                        />
                        <p className="text-danger">
                          {this.state.errors.firstname}
                        </p>
                      </div>
                    </div>

                    <div className="col-md-6 padding">
                      <div className="form-group">
                        <label htmlFor="lastname" className="label">
                          Last Name *
                        </label>
                        <Input
                          id="lastname"
                          type="text"
                          name="lastname"
                          className="form-control"
                          placeholder="Please enter Surname "
                          value={
                            this.props.developer.developer
                              ? this.props.developer.developer.lastname
                              : ""
                          }
                          onChange={this.handleChange}
                          onBlur={this.handleBlur}
                        />
                        <p className="text-danger">
                          {this.state.errors.lastname}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Email */}
                  <div className="form-group label-floating">
                    <label htmlFor="email" className="label">
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Please enter Email *"
                      value={
                        this.props.developer.developer
                          ? this.props.developer.developer.email
                          : ""
                      }
                      onChange={this.handleChange}
                      onBlur={this.handleBlur}
                    />
                    <p className="text-danger">{this.state.errors.email}</p>
                  </div>

                  {/* Phone Number */}

                  <div className="form-group label-floating">
                    <label htmlFor="phone" className="label">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      type="text"
                      name="phone"
                      className="form-control"
                      placeholder="Please enter your phone number *"
                      value={
                        this.props.developer.developer
                          ? this.props.developer.developer.phone
                          : ""
                      }
                      onChange={this.handleChange}
                      onBlur={this.handleBlur}
                    />
                    <p className="text-danger">{this.state.errors.phone}</p>
                  </div>

                  {/* Skills */}
                  <div className="form-group label-floating">
                    <label htmlFor="skills" className="label">
                      Skills *
                    </label>
                    <Input
                      id="skills"
                      type="string"
                      name="skills"
                      className="form-control"
                      placeholder="Please enter skills *"
                      value={
                        this.props.developer.developer
                          ? this.props.developer.developer.skills
                          : ""
                      }
                      onChange={this.handleChange}
                      onBlur={this.handleBlur}
                    />
                    <p className="text-danger">{this.state.errors.skills}</p>
                  </div>

                  {/* Score & Experience */}

                  <div className="row">
                    <div className="col-md-3 padding">
                      <div className="form-group">
                        <label htmlFor="score" className="label">
                          Score *
                        </label>
                        <Input
                          id="score"
                          type="number"
                          name="score"
                          className="form-control"
                          placeholder="Please enter score *"
                          value={
                            this.props.developer.developer
                              ? this.props.developer.developer.score
                              : ""
                          }
                          onChange={this.handleChange}
                          onBlur={this.handleBlur}
                        />
                        <p className="text-danger">{this.state.errors.score}</p>
                      </div>
                    </div>

                    <div className="col-md-3 padding">
                      <div className="form-group">
                        <label htmlFor="experience" className="label">
                          Experience *
                        </label>
                        <Input
                          id="experience"
                          type="number"
                          name="experience"
                          className="form-control"
                          placeholder="Please enter experience *"
                          value={
                            this.props.developer.developer
                              ? this.props.developer.developer.experience
                              : ""
                          }
                          onChange={this.handleChange}
                          onBlur={this.handleBlur}
                        />
                        <p className="text-danger">
                          {this.state.errors.experience}
                        </p>
                      </div>
                    </div>
                    <div className="col-md-3 padding">
                      <div className="form-group">
                        <label htmlFor="availability" className="label">
                          Availability *
                        </label>
                        <Input
                          id="availability"
                          type="number"
                          name="availability"
                          className="form-control"
                          placeholder="Please enter score *"
                          value={
                            this.props.developer.developer
                              ? this.props.developer.developer.availability
                              : ""
                          }
                          onChange={this.handleChange}
                          onBlur={this.handleBlur}
                        />
                        <p className="text-danger">
                          {this.state.errors.availability}
                        </p>
                      </div>
                    </div>
                    <div className="col-md-3 padding">
                      <div className="form-group">
                        <label htmlFor="costPerHour" className="label">
                          Cost *
                        </label>
                        <Input
                          id="costPerHour"
                          type="number"
                          name="costPerHour"
                          className="form-control"
                          placeholder="Please enter score *"
                          value={
                            this.props.developer.developer
                              ? this.props.developer.developer.costPerHour
                              : ""
                          }
                          onChange={this.handleChange}
                          onBlur={this.handleBlur}
                        />
                        <p className="text-danger">
                          {this.state.errors.costPerHour}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Catgory */}

                  <label htmlFor="category" className="label">
                    Catagory*
                  </label>
                  <div className="form-group">
                    <div className="row">
                      <div className="col-md-3 paddingRadio">
                        <div className="row">
                          <div className="col-md-3 paddingRadio">
                            <input
                              id="consultant"
                              type="radio"
                              name="category"
                              className="form-control"
                              checked={
                                this.props.developer.developer
                                  ? this.props.developer.developer.category
                                  : ""
                              }
                              onChange={this.handleChecked}
                            />
                          </div>
                          <div className="col-md-9 paddingRadio">
                            <span>Consultant</span>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-3 paddingRadio">
                        <div className="row">
                          <div className="col-md-3 paddingRadio">
                            <input
                              id="freelancer"
                              type="radio"
                              name="category"
                              className="form-control"
                              checked={
                                this.props.developer.developer
                                  ? this.props.developer.developer.category
                                  : ""
                              }
                              onChange={this.handleChecked}
                            />
                          </div>
                          <div className="col-md-9 paddingRadio">
                            <span>Freelancer</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 paddingRadio">
                        <div className="row">
                          <div className="col-md-3 paddingRadio">
                            <input
                              id="Inhouseteam"
                              type="radio"
                              name="category"
                              className="form-control"
                              checked={
                                this.props.developer.developer
                                  ? this.props.developer.developer.category
                                  : ""
                              }
                              onChange={this.handleChecked}
                            />
                          </div>
                          <div className="col-md-9 paddingRadio">
                            <span>Inhouse team</span>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-3 paddingRadio">
                        <div className="row">
                          <div className="col-md-3 paddingRadio">
                            <input
                              id="remoteworker"
                              type="radio"
                              name="category"
                              className="form-control"
                              checked={
                                this.props.developer.developer
                                  ? this.props.developer.developer.category
                                  : ""
                              }
                              onChange={this.handleChecked}
                            />
                          </div>
                          <div className="col-md-9 paddingRadio">
                            <span>Remote worker</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Location and reference */}

                  <div className="row">
                    <div className="col-md-6 padding">
                      <div className="form-group">
                        <label htmlFor="location" className="label">
                          Location *
                        </label>
                        <Input
                          id="location"
                          type="string"
                          name="location"
                          className="form-control"
                          placeholder="Please enter location *"
                          value={
                            this.props.developer.developer
                              ? this.props.developer.developer.location
                              : ""
                          }
                          onChange={this.handleChange}
                          onBlur={this.handleBlur}
                        />
                        <p className="text-danger">
                          {this.state.errors.location}
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 padding">
                      <div className="form-group">
                        <Label htmlFor="reference" className="label">
                          Reference *
                        </Label>
                        <input
                          id="reference"
                          type="text"
                          name="reference"
                          className="form-control"
                          placeholder="Please enter reference"
                          value={
                            this.props.developer.developer
                              ? this.props.developer.developer.reference
                              : ""
                          }
                          onChange={this.handleChange}
                          onBlur={this.handleBlur}
                        />
                        <p className="text-danger">
                          {this.state.errors.reference}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Contract */}
                  <label htmlFor="contract" className="label">
                    Contract *
                  </label>
                  <div className="form-group">
                    <div className="row">
                      <div className="col-md-6 padding">
                        <div className="row">
                          <div className="col-md-3 paddingRadio">
                            <input
                              id="fixed"
                              type="radio"
                              name="contract"
                              className="form-control"
                              checked={
                                this.props.developer.developer
                                  ? this.props.developer.developer.contract
                                  : ""
                              }
                              onChange={this.handleChecked}
                            />
                          </div>
                          <div className="col-md-9 paddingRadio">
                            <span>Fixed</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 padding">
                        <div className="row">
                          <div className="col-md-3 paddingRadio">
                            <input
                              id="hourly"
                              type="radio"
                              name="contract"
                              className="form-control"
                              checked={
                                this.props.developer.developer
                                  ? this.props.developer.developer.contract
                                  : ""
                              }
                              onChange={this.handleChecked}
                            />
                          </div>
                          <div className="col-md-9 paddingRadio">
                            <span>Hourly</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Git Link */}
                  <div className="form-group label-floating">
                    <label htmlFor="github" className="label">
                      GitHub *
                    </label>
                    <Input
                      id="github"
                      type="text"
                      name="github"
                      className="form-control"
                      placeholder="Please enter your github link *"
                      value={
                        this.props.developer.developer
                          ? this.props.developer.developer.github
                          : ""
                      }
                      onChange={this.handleChange}
                      onBlur={this.handleBlur}
                    />
                    <p className="text-danger">{this.state.errors.github}</p>
                  </div>

                  {/* LinkedIn Link */}
                  <div className="form-group label-floating">
                    <label htmlFor="linkedin" className="label">
                      LinkedIn *
                    </label>
                    <Input
                      id="linkedin"
                      type="text"
                      name="linkedin"
                      className="form-control"
                      placeholder="Please enter your LinkedIn link *"
                      value={
                        this.props.developer.developer
                          ? this.props.developer.developer.linkedin
                          : ""
                      }
                      onChange={this.handleChange}
                      onBlur={this.handleBlur}
                    />
                    <p className="text-danger">{this.state.errors.linkedin}</p>
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
                    <p style={{ marginTop: "-1%" }}>
                      *These field are required
                    </p>
                  </div>
                </div>
              </div>
            </Form>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

EditDeveloper.propTypes = {
  editDeveloper: PropTypes.func.isRequired,
  developer: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  developer: state.developer
});
export default connect(
  mapStateToProps,
  { editDeveloper, getDeveloper }
)(EditDeveloper);
