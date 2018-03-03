import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import AppRoutes from "./routes";

const css = require("./styles.scss"); 

console.log("Hi");

ReactDOM.render(
    <Provider store={store}>
        <AppRoutes />
    </Provider>,
    document.getElementById("app")
);