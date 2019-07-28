import React, { Component } from "react";
import AuthNavbar from "./Navbar";
import "../style/register.css";
import { Form, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import { createDeveloper } from "../redux/actions/developerAction";
import PropTypes from "prop-types";
import * as EmailValidator from "email-validator";
import Select from "react-select";
import Skills from "./skillsOptions";

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      skills: [],
      selectSkill: null,
      score: 0,
      experience: 0,
      category: "Consultant",
      location: "",
      availability: 0,
      costPerHour: 0,
      contract: "Fixed",
      reference: "",
      email: "",
      resume: null,
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

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleFile = e => {
    console.log(e.target.files[0]);
    this.setState({
      resume: e.target.files[0]
    });
  };

  handleOptionChange = e => {
    this.setState({
      category: e.target.value
    });
  };

  handleContractOption = e => {
    this.setState({
      contract: e.target.value
    });
  };

  handleSelect = selectSkill => {
    this.setState({ selectSkill: [...selectSkill] });
  };
  handleSubmit = e => {
    e.preventDefault();

    const skills = this.state.selectSkill.map(skill => JSON.stringify(skill));

    const formData = new FormData();
    formData.append("firstname", this.state.firstname);
    formData.append("lastname", this.state.lastname);
    formData.append("skills", skills);
    formData.append("score", this.state.score);
    formData.append("experience", this.state.experience);
    formData.append("category", this.state.category);
    formData.append("location", this.state.location);
    formData.append("availability", this.state.availability);
    formData.append("costPerHour", this.state.costPerHour);
    formData.append("contract", this.state.contract);
    formData.append("reference", this.state.reference);
    formData.append("email", this.state.email);
    formData.append("phone", this.state.phone);
    formData.append("resume", this.state.resume);
    formData.append("github", this.state.github);
    formData.append("linkedin", this.state.linkedin);
    formData.append("archive", this.state.archive);
    formData.append("isBlacklist", this.state.isBlacklist);
    this.props.createDeveloper(formData);

    this.props.history.push("/dashboard");
  };
  // handleBlur = e => {
  //   const { errors, ...inputs } = this.state;

  //   this.validation(inputs);
  // };

  // validation = ({
  //   firstname,
  //   lastname,
  //   score,
  //   experience,
  //   location,
  //   availability,
  //   costPerHour,
  //   reference,
  //   email,
  //   phone,
  //   github,
  //   linkedin
  // }) => {
  //   const errors = {
  //     firstname: "",
  //     lastname: "",
  //     score: "",
  //     experience: "",
  //     location: "",
  //     availability: "",
  //     costPerHour: "",
  //     reference: "",
  //     email: "",
  //     phone: "",
  //     github: "",
  //     linkedin: ""
  //   };
  //   const reg = /^\d+$/;
  //   const regexpUrl = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  //   if (firstname.length === 0) {
  //     errors.firstname = "First Name can not be empty.";
  //     errors.disabled = true;
  //   } else if (firstname.length > 50) {
  //     errors.firstname = "First Name can contains atmost 50 charchters";
  //     errors.disabled = true;
  //   } else if (lastname.length === 0) {
  //     errors.lastname = "Last Name can not be empty.";
  //     errors.disabled = true;
  //   } else if (lastname.length > 20) {
  //     errors.lastname = "lastname can contains atmost 20 charchters";
  //     errors.disabled = true;
  //   } else if (!EmailValidator.validate(email) || email.length === 0) {
  //     errors.email = "Please enter valid e-mail address";
  //     errors.disabled = true;
  //   } else if (!reg.test(phone)) {
  //     errors.phone = " Phone number should contains numeric value only";
  //     errors.disabled = true;
  //   } else if (phone.length !== 10) {
  //     errors.phone = " Please enter a valid phone number.";
  //     errors.disabled = true;
  //   } else if (score < 1) {
  //     errors.score = "Please enter a valid score";
  //     errors.disabled = true;
  //   } else if (experience < 1) {
  //     errors.experience = "Please enter your experience";
  //     errors.disabled = true;
  //   } else if (availability < 1 || availability > 10) {
  //     errors.availability = "Please enter a valid input.";
  //     errors.disabled = true;
  //   } else if (costPerHour < 0) {
  //     errors.costPerHour = "Please enter a valid amount";
  //     errors.disabled = true;
  //   } else if (location.length < 2) {
  //     errors.location = "Please enter a valid location!";
  //     errors.disabled = true;
  //   } else if (reference.length < 1) {
  //     errors.reference = "Please provide a valid Reference.";
  //     errors.disabled = true;
  //   } else if (linkedin.length < 1) {
  //     errors.linkedin = "Linkedin profile field can't be empty.";
  //     errors.disabled = true;
  //   } else if (!regexpUrl.test(github) || github.length === 0) {
  //     errors.github = "Please provide a valid Github profile URL.";
  //     errors.github = true;
  //   } else if (!regexpUrl.test(linkedin) || linkedin.length === 0) {
  //     errors.linkedin = "Please provide a valid Linkedin profile URL.";
  //     errors.disabled = true;
  //   }
  //   this.setState({ errors });

  //   return errors;
  // };

  render() {
    return (
      <React.Fragment>
        <AuthNavbar />
        <section className="section">
          <div className="container">
            <h3>Create Developer Profile</h3>
            <Form
              className="form"
              onSubmit={this.handleSubmit}
              encType="multipart/form-data"
            >
              <div className="row">
                <div className="col-md-6 padding offset-md-3">
                  <div className="row">
                    <div className="col-md-6 padding">
                      <div className="form-group">
                        <Label htmlFor="firstname" className="label">
                          First Name <span style={{ color: "red" }}>*</span>
                        </Label>
                        <Input
                          id="firstname"
                          type="text"
                          name="firstname"
                          className="form-control"
                          placeholder="Please enter firstname"
                          value={this.state.firstname}
                          onChange={this.handleChange}
                          // onBlur={this.handleBlur}
                        />
                        <p className="text-danger">
                          {/* {this.state.errors.firstname} */}
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 padding">
                      <div className="form-group">
                        <label htmlFor="lastname" className="label">
                          Last Name <span style={{ color: "red" }}>*</span>
                        </label>
                        <Input
                          id="lastname"
                          type="text"
                          name="lastname"
                          className="form-control"
                          placeholder="Please enter Surname "
                          value={this.state.lastname}
                          onChange={this.handleChange}
                          // onBlur={this.handleBlur}
                        />
                        <p className="text-danger">
                          {/* {this.state.errors.lastname} */}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Email */}
                  <div className="form-group label-floating">
                    <label htmlFor="email" className="label">
                      Email <span style={{ color: "red" }}>*</span>
                    </label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Please enter Email *"
                      value={this.state.email}
                      onChange={this.handleChange}
                      // onBlur={this.handleBlur}
                    />
                    {/* <p className="text-danger">{this.state.errors.email}</p> */}
                  </div>

                  {/* Phone Number */}

                  <div className="form-group label-floating">
                    <label htmlFor="phone" className="label">
                      Phone Number <span style={{ color: "red" }}>*</span>
                    </label>
                    <Input
                      id="phone"
                      type="text"
                      name="phone"
                      className="form-control"
                      placeholder="Please enter your phone number *"
                      value={this.state.phone}
                      onChange={this.handleChange}
                      // onBlur={this.handleBlur}
                    />
                    {/* <p className="text-danger">{this.state.errors.phone}</p> */}
                  </div>

                  {/* Skills */}
                  <div className="form-group label-floating">
                    <label htmlFor="skills" className="label">
                      Skills <span style={{ color: "red" }}>*</span>
                    </label>
                    <div>
                      <Select
                        value={this.state.selectSkill}
                        onChange={this.handleSelect}
                        options={Skills}
                        isMulti
                      />
                    </div>
                    {/* <p className="text-danger">{this.state.errors.skills}</p> */}
                  </div>

                  {/* Score & Experience */}

                  <div className="row">
                    <div className="col-md-6 padding">
                      <div className="form-group">
                        <label htmlFor="score" className="label">
                          Score <span style={{ color: "red" }}>*</span>
                        </label>
                        <Input
                          id="score"
                          type="number"
                          name="score"
                          className="form-control"
                          value={this.state.score}
                          onChange={this.handleChange}
                          // onBlur={this.handleBlur}
                        />
                        {/* <p className="text-danger">{this.state.errors.score}</p> */}
                      </div>
                    </div>

                    <div className="col-md-6 padding">
                      <div className="form-group">
                        <label htmlFor="experience" className="label">
                          Experience <span style={{ color: "red" }}>*</span>
                        </label>
                        <Input
                          id="experience"
                          type="number"
                          name="experience"
                          className="form-control"
                          value={this.state.experience}
                          onChange={this.handleChange}
                          // onBlur={this.handleBlur}
                        />
                        <p className="text-danger">
                          {/* {this.state.errors.experience} */}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 padding">
                      <div className="form-group">
                        <label htmlFor="availability" className="label">
                          Availability <span style={{ color: "red" }}>*</span>
                        </label>
                        <Input
                          id="availability"
                          type="number"
                          name="availability"
                          className="form-control"
                          value={this.state.availability}
                          onChange={this.handleChange}
                          // onBlur={this.handleBlur}
                        />
                        <p className="text-danger">
                          {/* {this.state.errors.availability} */}
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 padding">
                      <div className="form-group">
                        <label htmlFor="costPerHour" className="label">
                          Cost <span style={{ color: "red" }}>*</span>
                        </label>
                        <Input
                          id="costPerHour"
                          type="number"
                          name="costPerHour"
                          className="form-control"
                          value={this.state.costPerHour}
                          onChange={this.handleChange}
                          // onBlur={this.handleBlur}
                        />
                        <p className="text-danger">
                          {/* {this.state.errors.costPerHour} */}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Catgory */}

                  <label htmlFor="category" className="label">
                    Catagory<span style={{ color: "red" }}>*</span>
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
                              value="Consultant"
                              checked={this.state.category === "Consultant"}
                              onChange={this.handleOptionChange}
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
                              value="Freelancer"
                              checked={this.state.category === "Freelancer"}
                              onChange={this.handleOptionChange}
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
                              value="Inhouse team"
                              checked={this.state.category === "Inhouse team"}
                              onChange={this.handleOptionChange}
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
                              id="Remoteworker"
                              type="radio"
                              name="category"
                              className="form-control"
                              value="Remote worker"
                              checked={this.state.category === "Remote worker"}
                              onChange={this.handleOptionChange}
                            />
                          </div>
                          <div className="col-md-9 paddingRadio">
                            <span>Remote worker</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Location and Reference */}

                  <div className="row">
                    <div className="col-md-6 padding">
                      <div className="form-group">
                        <label htmlFor="location" className="label">
                          Location <span style={{ color: "red" }}>*</span>
                        </label>
                        <Input
                          id="location"
                          type="string"
                          name="location"
                          className="form-control"
                          placeholder="Please enter location *"
                          value={this.state.location}
                          onChange={this.handleChange}
                          // onBlur={this.handleBlur}
                        />
                        <p className="text-danger">
                          {/* {this.state.errors.location} */}
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 padding">
                      <div className="form-group">
                        <label htmlFor="reference" className="label">
                          Reference <span style={{ color: "red" }}>*</span>
                        </label>
                        <Input
                          id="reference"
                          type="string"
                          name="reference"
                          className="form-control"
                          placeholder="Enter reference*"
                          value={this.state.reference}
                          onChange={this.handleChange}
                          // onBlur={this.handleBlur}
                        />
                        <p className="text-danger">
                          {/* {this.state.errors.reference} */}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Contract */}
                  <label htmlFor="contract" className="label">
                    Contract <span style={{ color: "red" }}>*</span>
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
                              value="Fixed"
                              checked={this.state.contract === "Fixed"}
                              onChange={this.handleContractOption}
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
                              value="Hourly"
                              checked={this.state.contract === "Hourly"}
                              onChange={this.handleContractOption}
                            />
                          </div>
                          <div className="col-md-9 paddingRadio">
                            <span>Hourly</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Resume */}
                  <div className="form-group label-floating col-md-8">
                    <label htmlFor="resume" className="label">
                      Resume <span style={{ color: "red" }}>*</span>
                    </label>
                    <Input
                      type="file"
                      name="resume"
                      className="form-control"
                      // value={this.state.resume}
                      onChange={e => this.handleFile(e)}
                    />
                  </div>
                  {/* Git Link */}
                  <div className="form-group label-floating">
                    <label htmlFor="github" className="label">
                      GitHub <span style={{ color: "red" }}>*</span>
                    </label>
                    <Input
                      id="github"
                      type="text"
                      name="github"
                      className="form-control"
                      placeholder="Please enter your Github link *"
                      value={this.state.github}
                      onChange={this.handleChange}
                      // onBlur={this.handleBlur}
                    />
                    {/* <p className="text-danger">{this.state.errors.github}</p> */}
                  </div>

                  {/* LinkedIn Link */}
                  <div className="form-group label-floating">
                    <label htmlFor="linkedin" className="label">
                      LinkedIn <span style={{ color: "red" }}>*</span>
                    </label>
                    <Input
                      id="linkedin"
                      type="text"
                      name="linkedin"
                      className="form-control"
                      placeholder="Please enter your LinkedIn link *"
                      value={this.state.linkedin}
                      onChange={this.handleChange}
                      // onBlur={this.handleBlur}
                    />
                    {/* <p className="text-danger">{this.state.errors.linkedin}</p> */}
                  </div>

                  <div className="form-submit mt-5">
                    <button
                      className="btn3"
                      type="submit"
                      // disabled={this.state.errors.disabled}
                    >
                      Send
                    </button>
                    <div id="msgSubmit" className="h3 text-center hidden" />
                    <div className="clearfix" />
                    <p style={{ marginTop: "-1%" }}>
                      <span style={{ color: "red" }}>*</span>These field are
                      required
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

ContactUs.propTypes = {
  createDeveloper: PropTypes.func.isRequired,
  developer: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  developer: state.developer
});
export default connect(
  mapStateToProps,
  { createDeveloper }
)(ContactUs);
