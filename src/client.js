import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import Application from "./action/Application.action";
import Layout from "./component/Layout.component";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Router path="/" component={Layout}/>
  </Router>,
app);