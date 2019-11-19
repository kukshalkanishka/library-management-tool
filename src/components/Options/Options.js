import React from "react";
import { Link } from "react-router-dom";

const Options = () => {
  return (
    <div className="form options">
      <h3>LMT</h3>
      <Link to="/login" className="option">
        Login
      </Link>
      <Link to="/signup" className="option">
        Sign Up
      </Link>
    </div>
  );
};

export default Options;
