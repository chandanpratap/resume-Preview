import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ResumeDetails from "./components/ResumeBuilder/Form/ResumeDetails";
import Preview from "./components/ResumeBuilder/Preview/Preview";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_information: {},
      experience_details: [],
      first_name: "",
      middle_name: "",
      last_name: "",
      date: "",
      gender: "",
    };
  }

  getFirstName = (data) => {
    this.setState({ first_name: data });
  };
  getMiddleName = (data) => {
    this.setState({ middle_name: data });
  };
  getLastName = (data) => {
    this.setState({ last_name: data });
  };
  getGender = (data) => {
    this.setState({ gender: data });
  };
  getDate = (data) => {
    this.setState({ date: data });
  };

  getUserInformation = (data) => {
    this.setState({ user_information: data });
  };

  getExperienceData = (data) => {
    this.setState({ experience_details: data });
  };

  render() {
    return (
      <div>
        <Header />
        <div className="main">
          <div className="row">
            <div className="col-md-6">
              <ResumeDetails
                getData={this.getUserInformation}
                getExperienceData={this.getExperienceData}
                getFirstName={this.getFirstName}
                getMiddleName={this.getMiddleName}
                getLastName={this.getLastName}
                getGender={this.getGender}
                getDate={this.getDate}
              />
            </div>
            <div className="col-md-6">
              <Preview
                first_name={this.state.first_name}
                middle_name={this.state.middle_name}
                last_name={this.state.last_name}
                date={this.state.date}
                gender={this.state.gender}
                data={this.state.user_information}
                experience_details={this.state.experience_details}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
