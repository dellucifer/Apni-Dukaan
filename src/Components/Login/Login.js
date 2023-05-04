import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        setEmail('');
        setPass('');
    }

    const register = (e) => {
        e.preventDefault();
    }

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://raw.githubusercontent.com/dellucifer/Apni-Dukaan/master/public/logo-apni_dukaan.png"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign In</h1>

        <form>
          <h5>Apna Email</h5>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          <h5>Apna Password</h5>
          <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} />

          <button type='submit' onClick={signIn} className="login__signInButton">Sign In</button>
        </form>

        <p>By signing-in you agree to the APNI DUKAAN's Conditions of Use & Sale. Please see out <Link to='/privacy'>Privacy Notice</Link>, our Cookies Notice and our Intereset-Based Ads Notice.</p>

        <button onClick={register} className="login__registerButton">Create your Apna Account</button>
      </div>
    </div>
  );
}

export default Login;
