import React from "react";
import "../../../App.css";
import DoctorPic from "../../assets/images/doctor_pic.jpeg";
import QrCode from "../../assets/images/qr_code.png";
import Prize from "../../assets/images/prize.png";
import Cookies from "js-cookie";
import axios from "axios";
class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      middle_name: "",
      last_name: "",
      date: "",
      flag: true,
      experience_details: [],
    };
  }

  componentDidMount() {
    this.getuserInformation();
    this.getExperiencesData();
  }

  getExperiencesData = async () => {
    let cookie = Cookies.get("email");
    let token = Cookies.get("token");
    if (token !== null || token !== "undefined") {
      await axios
        .get("http://localhost:3000/details")
        .then((response) => {
          response.data.map((val, k) =>
            val["email"] === cookie
              ? this.setState({
                  experience_details: response.data,
                })
              : null
          );
        })
        .catch((error) => {});
    } else {
      window.open("/login");
    }
  };

  getuserInformation = async () => {
    let cookie = Cookies.get("email");
    let token = Cookies.get("token");
    if (token !== null || token !== "undefined") {
      await axios
        .get("http://localhost:3000/posts")
        .then((response) => {
          response.data.map((val, k) =>
            val["email"] === cookie
              ? this.setState({
                  first_name: val["first_name"],
                  middle_name: val["middle_name"],
                  last_name: val["last_name"],
                  date: val["date"],
                  flag: false,
                })
              : null
          );
        })
        .catch((error) => {});
    } else {
      window.open("/login");
    }
  };

  getData = () => {
    if (!this.state.flag) {
      return (
        <h4>
          Dr. {this.state.first_name || ""} {this.state.middle_name || ""}{" "}
          {this.state.last_name || ""}
        </h4>
      );
    } else {
      return (
        <h4>
          Dr. {this.props.first_name || ""} {this.props.middle_name || ""}{" "}
          {this.props.last_name || ""}
        </h4>
      );
    }
  };

  getDate = () => {
    if (!this.state.flag) {
      return <h5>{this.state.date || ""}</h5>;
    } else {
      return <h5>{this.props.date || ""}</h5>;
    }
  };

  getExperiences = () => {
    let cookie = Cookies.get("email");
    return this.props.experience_details.map(
      (val, key) => (
        // val["email"] === cookie ? (
        <div>
          <ul>
            <h5>
              2.{key + 1} {val["name"]}
            </h5>
            <ul>
              <li>{val["details"]}</li>
            </ul>
          </ul>
        </div>
      )
      // ) : null
    );
  };
  // };

  render() {
    console.log(this.props.experience_details);
    return (
      <div>
        <center>
          <h4>Preview</h4>
        </center>
        <br />
        <div className="preview-main">
          <div className="row doctor-name-wrapper">
            <div className="col-md-6">
              <div>
                {this.getData()}
                <h5>
                  MBBS MD (Med), M.Sc (Canada),FCGP, FICP, FIMS, FIAMS, FCCP
                  (USA), FACP (USA), FRCP(G),FRCP(E)
                </h5>
                <h5>Date of Birth: {this.getDate()}</h5>
                <h5>License No: 5678901234</h5>
              </div>
            </div>

            <div className="col-md-3">
              <img
                src={DoctorPic}
                alt="medpiper"
                class="rounded mx-auto d-block"
                width="100%"
                height="90%"
              />
            </div>

            <div className="col-md-3">
              <img
                src={QrCode}
                alt="medpiper"
                class="rounded mx-auto d-block"
                width="100%"
                height="70%"
              />
              <center>
                <p>Scan here to open the link</p>
              </center>
            </div>
          </div>

          <div className="exp-main">
            <div className="exp">
              <h4>Clinical Experiences </h4>
            </div>

            <div className="prize">
              <img
                src={Prize}
                alt="medpiper"
                class="rounded float-left"
                width="30%"
                height="100%"
              />
            </div>
          </div>
          <br />
          <div className="preview-details">
            <div>
              <h4>1 License</h4>
              <ul>
                <li>
                  Reg. No. Year 1973- Andhra Pradesh Medical Council
                  (affilliated to the medical Coucil of India.)
                </li>
                <li>
                  Reg. No. Year 1973- Andhra Pradesh Medical Council
                  (affilliated to the medical Coucil of India.)
                </li>
                <li>
                  Reg. No. Year 1973- Andhra Pradesh Medical Council
                  (affilliated to the medical Coucil of India.)
                </li>
                <li>
                  Reg. No. Year 1973- Andhra Pradesh Medical Council
                  (affilliated to the medical Coucil of India.)
                </li>
              </ul>
            </div>

            <div>
              <h4>2 Professional Experiences</h4>
              {this.getExperiences()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Preview;
