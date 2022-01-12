// import React from "react";
import "./signin.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const SignUp = () => {
  let navigate = useNavigate();
  const [name, nameSet] = useState("");
  const [password, passwordSet] = useState("");
  const [email, emailSet] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSignup = async () => {
    navigate("/signin");
    try {
      await axios.post("/api/user/signup", {
        name: name,
        email: email,
        password: password,
        confirmPassword: confirm,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="signup">
      <Link to="/" className="signup_re">
       SORTING VISUALISER
      </Link>
      <div className="signin_container">
        <h1>Sign-up</h1>
        <form>
          <h5>Username</h5>
          <input
            type="text"
            placeholder="Your Name"
            onChange={(e) => nameSet(e.target.value)}
          />

          <h5>E-mail</h5>
          <input
            type="text"
            placeholder="your Email"
            onChange={(e) => emailSet(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            placeholder="**********"
            onChange={(e) => passwordSet(e.target.value)}
          />

          <h5>Confirm-Password</h5>
          <input
            type="password"
            placeholder="**********"
            onChange={(e) => setConfirm(e.target.value)}
          />

          <button
            className="sign_inButton"
            onClick={() => {
              handleSignup();
            }}
          >
            Sign up
          </button>
         <Link to ="/" className="btn btn-primary">
             Back
         </Link>
        </form>
        
      </div>
    </div>
  );
};

export default SignUp;
