import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import App from "./App";

import Login from "./components/auth_componets/Login";

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
