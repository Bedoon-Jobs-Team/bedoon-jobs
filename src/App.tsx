import React from "react";
import "./App.css";
import JobDetailsPage from "./pages/JobDetailsPage";
import MainPage from "./pages/MainPage";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import OfferJobPage from "./pages/OfferJobPage";
import LoginPage from "./pages/LoginPage";
import { useCurrentUser } from "./hooks/useCurrentUser";
import SignUpPage from "./pages/SignUpPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";

function App() {
  const currentUser = useCurrentUser();
  return (
    <Router>
      <>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/jobAds/:id" component={JobDetailsPage} />
          <Route exact path="/offer-job">
            {currentUser ? <OfferJobPage /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/forgotPassword" component={ForgotPasswordPage} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
