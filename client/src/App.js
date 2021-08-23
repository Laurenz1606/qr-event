import React from "react";
import { LogoutProtect, LoginProtect, setConfig } from "@authfunctions/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Sites/Home";
import Register from "./Sites/Register";
import Login from "./Sites/Login";

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

setConfig({
  AUTHURL: "https://event-server.mk-return.de/auth",
  APIURL: "http://localhost:5000/api",
});

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LogoutProtect>
            <Login />
          </LogoutProtect>
        </Route>
        <Route path="/register">
          <LogoutProtect>
            <Register />
          </LogoutProtect>
        </Route>
        <Route path="/">
          <LoginProtect>
            <Home />
          </LoginProtect>
        </Route>
      </Switch>
    </Router>
  );
}
