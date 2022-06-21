import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import Cadastro from "../../Components/cadastro/index";
import Login from "../../Components/login/index";
import Img from "../../static/img/unifametro.jpg";
import Dashboard from "../../Components/dashboard/index";

export default function index({ token, setToken, Theme, setTheme }) {
  if (!!token) {
    return (
      <Router path="/">
        <Dashboard Theme={Theme} setTheme={setTheme} />
      </Router>
    );
  }
  return (
    <Router>
      <Switch>
        <Route path="/">
          <div className="d-flex">
            <ReactNotification />
            <Login setToken={setToken} Theme={Theme} />
            <Cadastro Theme={Theme} />
            <div className="logo">
              <img src={Img} className="imglogo" />
            </div>
          </div>
        </Route>
        <Route path="/dashboard">
          <div className="bg-dark">
            <Dashboard Theme={Theme} setTheme={setTheme} />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}
