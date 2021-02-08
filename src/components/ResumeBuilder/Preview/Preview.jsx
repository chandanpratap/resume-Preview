import React, { Component } from "react";
import "../../../App.css";
import DoctorPic from "../../assets/images/doctor_pic.jpeg";
import QrCode from "../../assets/images/qr_code.png";
import Prize from "../../assets/images/prize.png";

const Preview = (props) => {
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
              <h4>
                Dr. {props.data.first_name || ""} {props.data.middle_name || ""}{" "}
                {props.data.last_name || ""}
              </h4>
              <h5>
                MBBS MD (Med), M.Sc (Canada),FCGP, FICP, FIMS, FIAMS, FCCP
                (USA), FACP (USA), FRCP(G),FRCP(E)
              </h5>
              <h5>Date of Birth: {props.data.date || ""}</h5>
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
                Reg. No. Year 1973- Andhra Pradesh Medical Council (affilliated
                to the medical Coucil of India.)
              </li>
              <li>
                Reg. No. Year 1973- Andhra Pradesh Medical Council (affilliated
                to the medical Coucil of India.)
              </li>
              <li>
                Reg. No. Year 1973- Andhra Pradesh Medical Council (affilliated
                to the medical Coucil of India.)
              </li>
              <li>
                Reg. No. Year 1973- Andhra Pradesh Medical Council (affilliated
                to the medical Coucil of India.)
              </li>
            </ul>
          </div>

          <div>
            <h4>2 Professional Experiences</h4>
            {props.experience_details.map((val, key) => (
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
