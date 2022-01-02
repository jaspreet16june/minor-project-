
import React from "react";
import { Link } from "react-router-dom";
import "./signin.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { userCreator } from "../redux/actions/userAction";

const SignIn = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const [password, passwordSet] = useState("");
  const [email, emailSet] = useState("");
  let userData = [];

  const handleSignin = async () => {
    navigate("/sort");
    try {
      let user = [];
      user = await axios.post("/auth/login", {
        email: email,
        password: password,
      });
      return user;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="signin">
      <Link to="/">
       SORTING VISUALISER
      </Link>
      <div className="signin_container">
        <h1>Sign-in</h1>
        <form>
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
          <button
            className="sign_inButton"
            onClick={async () => {
              let user = await handleSignin()

              dispatch(userCreator(true));
            }}
          >
            Sign In
          </button>
        </form>
       
        <Link to="/signup">
          <button className="sign_inRegisterButton">
            Create Your Account
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
