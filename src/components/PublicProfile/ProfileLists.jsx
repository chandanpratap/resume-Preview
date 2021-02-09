import React from "react";
import axios from "axios";
import "../../App.css";
import Header from "../Header/Header";
import Cookies from "js-cookie";

class ProfileList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    let cookie = Cookies.get("email");
    let token = Cookies.get("token");

    if (cookie === undefined || token === undefined) {
      window.open("/", "_self");
    } else {
      axios
        .get("http://localhost:3000/posts")
        .then((response) => {
          this.setState({ data: response.data });
        })
        .catch((error) => {});
    }
  }

  redirectDoctorsDetails = (id) => {
    window.open("/doctor-details/".concat(id), "_blank");
  };

  render() {
    return (
      <div>
        <Header />
        <div className="main">
          <h5>List of All Doctors</h5>
          {this.state.data.map((val, k) =>
            val["make_profile_public"] === "yes" ? (
              <ul class="list-group">
                <li
                  class="list-group-item doctor-lists "
                  aria-current="true"
                  onClick={() => this.redirectDoctorsDetails(val["email"])}
                >
                  {val["first_name"] +
                    " " +
                    val["middle_name"] +
                    " " +
                    val["last_name"]}
                </li>
              </ul>
            ) : null
          )}
        </div>
      </div>
    );
  }
}

export default ProfileList;
