import React from "react";
import "./App.css";
import JobDetailsPage from "./pages/JobDetailsPage";
import MainPage from "./pages/MainPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <Router>
      <>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/listings/:id" component={JobDetailsPage} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
