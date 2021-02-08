import React from "react";
import "../../../App.css";
import axios from "axios";

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      middle_name: "",
      date: "",
      gender: "",
      make_profile_public: "",
      count: 0,
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onChangeGender = (e) => {
    this.setState({ gender: e.target.id });
  };

  onChangePublicProfile = (e) => {
    this.setState({ make_profile_public: e.target.id });
  };

  submitHandler = (e) => {
    e.preventDefault();
    let data = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      middle_name: this.state.middle_name,
      date: this.state.date,
      gender: this.state.gender,
      make_profile_public: this.state.make_profile_public,
    };
    axios
      .post("http://localhost:3000/posts", data)
      .then((response) => {})
      .catch((error) => {});
    this.props.getInformation(data);
    this.clearInformation(e);
  };

  clearInformation = (e) => {
    e.preventDefault();
    this.setState({
      first_name: "",
      last_name: "",
      middle_name: "",
      date: "",
      gender: "",
      make_profile_public: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div className="row">
            <div class="col-md-4">
              <label for="FirstName" class="form-label">
                First Name
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="First Name"
                name="first_name"
                value={this.state.first_name}
                onChange={this.changeHandler}
                required
              />
            </div>
            <div class="col-md-4">
              <label for="Middle Name" class="form-label">
                Middle Name
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="Middle Name"
                name="middle_name"
                value={this.state.middle_name}
                onChange={this.changeHandler}
              />
            </div>
            <div class="col-md-4">
              <label for="Last Name" class="form-label">
                Last Name
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="Last Name"
                name="last_name"
                value={this.state.last_name}
                onChange={this.changeHandler}
                required
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div class="col-md-4">
              <label for="dateofbirth" class="form-label">
                Date of Birth
              </label>
              <input
                type="date"
                class="form-control"
                name="date"
                value={this.state.date}
                onChange={this.changeHandler}
              />
            </div>
            <div class="col-md-4">
              <label for="gender" class="form-label">
                Gender
              </label>
              <div className="radio-button">
                <div>
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value={this.state.gender}
                    checked={this.state.gender === "male"}
                    onChange={this.onChangeGender}
                  />
                  <label for="male">Male</label>
                </div>
                <div className="female-radio-button">
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value={this.state.gender}
                    checked={this.state.gender === "female"}
                    onChange={this.onChangeGender}
                  />
                  <label for="female">Female</label>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <label for="gender" class="form-label">
                Make Profile Public
              </label>
              <div className="radio-button">
                <div>
                  <input
                    type="radio"
                    id="yes"
                    name="make-profile-public"
                    value={this.state.make_profile_public}
                    checked={this.state.make_profile_public === "yes"}
                    onChange={this.onChangePublicProfile}
                  />
                  <label for="yes">Yes</label>
                </div>
                <div className="female-radio-button">
                  <input
                    type="radio"
                    id="no"
                    name="make-profile-public"
                    value={this.state.make_profile_public}
                    checked={this.state.make_profile_public === "no"}
                    onChange={this.onChangePublicProfile}
                  />
                  <label for="no">No</label>
                </div>
              </div>
            </div>
          </div>
          <div className="form-buttons">
            <button
              class="btn btn-primary delete"
              onClick={this.clearInformation}
            >
              Cancel
            </button>
            <button type="submit" class="btn btn-primary add-new">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default UserForm;
