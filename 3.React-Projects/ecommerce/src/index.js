import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "gestalt/dist/gestalt.css";
import App from "./components/App";
import Navbar from "./components/Sitewide/Navbar.component";

import SigninComponent from "./components/auth/Signin.component";
import SignupComponent from "./components/auth/Signup.component";
import CheckoutComponent from "./components/Checkout.component";
import Brew from "./components/Brew.component";
import registerServiceWorker from "./registerServiceWorker";

const Root = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route component={App} path="/" exact />
          <Route component={SignupComponent} path="/signup" />
          <Route component={SigninComponent} path="/signin" />
          <Route component={CheckoutComponent} path="/checkout" />
          <Route component={Brew} path="/:brandId" />
        </Switch>
      </Fragment>
    </Router>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();
