import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import "./assets/css/style.scss";
import App from "./App";

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));
