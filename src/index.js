import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import AppRoutes from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";

// const css = require("./styles.scss"); 


console.log("Hi, bye");

ReactDOM.render(
    <Provider store={store}>
        <AppRoutes />
    </Provider>,
    document.getElementById("app")
);