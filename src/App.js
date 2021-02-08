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
    };
  }

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
              />
            </div>
            <div className="col-md-6">
              <Preview
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
