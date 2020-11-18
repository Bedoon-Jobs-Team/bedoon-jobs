import React from "react";
import "./App.css";
import JobDetailsPage from "./pages/JobDetailsPage";
import MainPage from "./pages/MainPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import OfferJobPage from "./pages/OfferJobPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/jobAds/:id" component={JobDetailsPage} />
          <Route exact path="/offer-job" component={OfferJobPage} />
          <Route exact path="/login" component={LoginPage} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
