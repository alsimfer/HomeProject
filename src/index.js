import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Main from "./containers/Main";
import Navigation from "./containers/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Navigation />
        <Main />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("app")
);