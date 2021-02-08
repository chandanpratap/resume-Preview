import React from "react";
import axios from "axios";
import "../../App.css";
import Header from "../Header/Header";
class profileDEtails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.getExperienceData();
  }

  getExperienceData = () => {
    axios
      .get("http://localhost:3000/details")
      .then((response) => {
        this.setState({ data: response.data });
      })
      .catch((error) => {});
  };

  render() {
    return (
      <div>
        <Header />
        <div className="main">
          <h5>About:</h5>
          {this.state.data.map((val, k) =>
            val["unique_id"] === this.props.match.params.id ? (
              <ul>
                <li>
                  <strong>Experience: </strong>
                  {val["name"]}
                </li>
                <li>
                  <strong>Details: </strong>
                  {val["details"]}
                </li>
              </ul>
            ) : null
          )}
        </div>
      </div>
    );
  }
}

export default profileDEtails;
