import React from "react";

const LOGIN_TITLE = "LOGIN";

const Login = () => {
  return (
    <form method="POST" action="/login" className="form">
      <h3>{LOGIN_TITLE}</h3>
      <input
        type="text"
        autocomplete="off"
        placeholder="username"
        name="username"
        required
      />
      <input
        type="password"
        autocomplete="off"
        placeholder="password"
        name="password"
        required
      />
      <input type="submit" value="LOGIN"/>
    </form>
  );
};

export default Login;
