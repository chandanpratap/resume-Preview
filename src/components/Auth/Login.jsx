import React from "react";
import "../../App.css";
import axios from "axios";
import Cookies from "js-cookie";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login_email: "",
      login_password: "",
      email: "",
      password: "",
      confirm_password: "",
      flag: false,
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = async (e) => {
    e.preventDefault();
    let data = {
      email: this.state.login_email,
      password: this.state.login_password,
    };
    await axios
      .post("/api/login", data)
      .then((response) => {
        this.getUsers(this.state.login_email);
        Cookies.set("token", response.data.token);
      })
      .catch((error) => {});
  };

  getUsers = (email) => {
    axios
      .get("http://localhost:3000/register")
      .then((response) => {
        console.log(response);
        response.data.map((val, k) =>
          val["email"] === email ? Cookies.set("email", email) : null
        );
        // Cookies.remove("email");
        let cookie = Cookies.get("email");
        if (cookie !== null && cookie !== undefined) {
          window.open("/resume-builder");
        }
      })
      .catch((error) => {});
  };

  submitSignUpHandler = async (e) => {
    e.preventDefault();
    let data = {
      email: this.state.email,
      password: this.state.password,
    };
    await axios
      .post("http://localhost:3000/register", data)
      .then((response) => {
        this.toggleLogin();
      })
      .catch((error) => {});
  };

  toggleLogin = () => {
    this.setState({ flag: !this.state.flag });
  };

  render() {
    return (
      <div className="main">
        {this.state.flag ? (
          <div className="login">
            <form onSubmit={this.submitHandler}>
              <div>
                <label for="email" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  placeholder="Email"
                  name="login_email"
                  value={this.state.login_email}
                  onChange={this.changeHandler}
                  required
                />
              </div>
              <br />
              <div>
                <label for="password" class="form-label">
                  Password
                </label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Password"
                  name="login_password"
                  value={this.state.login_password}
                  onChange={this.changeHandler}
                  required
                />
              </div>
              <br />
              <center>
                <h5>
                  Are you not register?{" "}
                  <span onClick={this.toggleLogin}>Register</span>
                </h5>
                <br />
                <button type="submit" class="btn btn-primary ">
                  Login
                </button>
              </center>
            </form>
          </div>
        ) : (
          <div className="login">
            <form onSubmit={this.submitSignUpHandler}>
              <div>
                <label for="email" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  placeholder="Email"
                  name="email"
                  value={this.state.email}
                  onChange={this.changeHandler}
                  required
                />
              </div>
              <br />
              <div>
                <label for="password" class="form-label">
                  Password
                </label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Password"
                  name="password"
                  value={this.state.password}
                  onChange={this.changeHandler}
                  required
                />
              </div>
              <br />
              <div>
                <label for="password" class="form-label">
                  Confirm Password
                </label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="ConfirmPassword"
                  name="confirm_password"
                  value={this.state.confirm_password}
                  onChange={this.changeHandler}
                  required
                />
              </div>
              <br />
              <center>
                <h5>
                  Are you allredy register?{" "}
                  <span onClick={this.toggleLogin}>Sign In</span>
                </h5>
                <br />
                <button type="submit" class="btn btn-primary ">
                  Register
                </button>
              </center>
            </form>
          </div>
        )}
      </div>
    );
  }
}
export default Login;
