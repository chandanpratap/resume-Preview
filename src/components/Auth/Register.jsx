import React from "react";
import "../../App.css";
import axios from "axios";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirm_password: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = async (e) => {
    e.preventDefault();
    let data = {
      email: this.state.email,
      password: this.state.password,
    };
    await axios
      .post("http://localhost:3000/register", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {});
  };

  render() {
    return (
      <div className="main">
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
            <center>
              <button type="submit" class="btn btn-primary ">
                Register
              </button>
            </center>
          </form>
        </div>
      </div>
    );
  }
}
export default Login;
