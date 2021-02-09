import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Router, Switch, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import ProfileList from "./components/PublicProfile/ProfileLists";
import ProfileDetails from "./components/PublicProfile/ProfileDetails";
import Login from "./components/Auth/Login";
export const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path={"/"} exact component={Login} />
      <Route path={"/resume-builder"} exact component={App} />
      <Route exact path={"/profile-page"} exact component={ProfileList} />
      <Route path={"/doctor-details/:id"} exact component={ProfileDetails} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
