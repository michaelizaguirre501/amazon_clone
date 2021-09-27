import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault(); //this stops refresh
    //do the login logic
    auth.signInWithEmailAndPassword(email, password);
  };
  const register = (e) => {
    e.preventDefault();
    //register logic
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="loginLogo"
          src="https:upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="amazon logo"
        />
      </Link>
      <div className="loginContainer">
        <h1>Sign in</h1>
        <form action="">
          <h5>E-mail</h5>
          <input type="email" />
          <h5>Password</h5>
          <input type="password" />
          <button onClick={login} type="submit" className="loginSigninButton">
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button onClick={register} className="loginCreateAccountButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
