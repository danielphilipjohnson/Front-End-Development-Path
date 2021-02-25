import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/home/header/Header";
import Subheader from "./Subheader";
import CheckoutSubNav from "./components/checkout/CheckoutSubNav";

// move to a layout component
import BrowseringHistory from "./components/sitewide/browsering-history/browsering-history";

import Footer from "./components/footer/footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
/* Routes */
import Orders from "./routes/orders/index";
import Login from "./routes/login/index";
import Checkout from "./routes/checkout/index";
import Payment from "./routes/payment/index";
import Home from "./routes/home/index";

import { auth } from "./firebase";

import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";

import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51HQAuMJeWABh5Sp38xHP9NIrjr86bLxMbEP8cYZ1FaFhVjTHZ7SkvISgqjuIAO8aILnOc6Q8e6BEso6nRn896Hb6009G667iad"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // run once when the app component loads
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        // user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Subheader />
            <CheckoutSubNav />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Subheader />
            <Home />
            <BrowseringHistory />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
