import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Options from "../Options/Options";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import Home from "../Home/Home";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Options} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/home" component={Home} />
    </Router>
  );
};

export default App;
