import React, { Component } from "react";
import "../../../App.css";
import Form from "./Form";
import ProfessionalExperience from "./ProfessionalExperience";
class ResumeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_information: {},
    };
  }
  getUserInformation = (data) => {
    this.setState({ user_information: data });
    this.props.getData(data);
  };

  getProfessionalExperienceInformation = (data) => {
    this.props.getExperienceData(data);
  };

  getFirstName = (data) => {
    this.props.getFirstName(data);
  };

  getMiddleName = (data) => {
    this.props.getMiddleName(data);
  };

  getLastName = (data) => {
    this.props.getLastName(data);
  };

  getGender = (data) => {
    this.props.getGender(data);
  };

  getDate = (data) => {
    this.props.getDate(data);
  };

  render() {
    return (
      <div>
        <h4>Resume Details</h4>
        <div class="accordion" id="accordionExample">
          <div class="accordion-item ">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Basic information
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <Form
                  getInformation={this.getUserInformation}
                  getFirstName={this.getFirstName}
                  getMiddleName={this.getMiddleName}
                  getLastName={this.getLastName}
                  getGender={this.getGender}
                  getDate={this.getDate}
                />
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Professional Experiences
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <ProfessionalExperience
                  getProfessionalExperienceInformation={
                    this.getProfessionalExperienceInformation
                  }
                  unique_id={this.state.user_information["first_name"]}
                />
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Medical Licence
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <table className="table">
                  <tr>
                    <th>First Name:</th>
                    <td>{this.state.user_information["first_name"]}</td>
                  </tr>
                  <tr>
                    <th>Middle Name:</th>
                    <td>{this.state.user_information["middle_name"]}</td>
                  </tr>
                  <tr>
                    <th>Last Name:</th>
                    <td>{this.state.user_information["last_name"]}</td>
                  </tr>

                  <tr>
                    <th>Date:</th>
                    <td>{this.state.user_information["date"]}</td>
                  </tr>
                  <tr>
                    <th>Gender:</th>
                    <td>{this.state.user_information["gender"]}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ResumeDetails;
