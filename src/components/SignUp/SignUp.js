import React from "react";

const SIGN_UP_TITLE = "SIGN UP";

const SignUp = () => {
  return (
    <form method="POST" action="/signup" className="form">
      <h3>{SIGN_UP_TITLE}</h3>
      <input type="text" placeholder="username" name="username" required />
      <input type="password" placeholder="password" name="password" required />
      <input type="submit" value="SIGN UP"/>
    </form>
  );
};

export default SignUp;
