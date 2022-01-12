import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userCreator } from "./redux/actions/userAction";


const Home = () => {
  let userCred = localStorage.getItem("logged user");
  let user = JSON.parse(userCred);
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let userStatus = useSelector((state) => state);

  console.log(user);
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            SORTING VISUALISER
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            {!user ? (
              <div class="navbar-nav">
                <Link to="/signin" type="submit" class="btn btn-primary">
                  SIGN IN
                </Link>
                <Link to="/signup" type="submit" class="btn btn-primary">
                  SIGN UP
                </Link>
              </div>
            ) : (
              <div className="loggedUser">
                <img className="user_logo" src={user[0].userImage} />
                <div className="loggedUser_info">
                  <h4>{user[0].name}</h4>
                  <button
                    type="submit" class="logout_Btn"
                    onClick={() => {
                      localStorage.removeItem("logged user");
                      dispatch(userCreator(false));
          
                      navigate("/");
                    }}
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      <div className=" mid">
        <h3 className="info">
          A Sorting Algorithm is used to rearrange a given array or list
          elements according to a comparison operator on the elements. The
          comparison operator is used to decide the new order of element in the
          respective data structure.
        </h3>

        {/* <h3>
            For Understanding Sorting algorithms Go to the below Button:
        </h3> */}
        <Link to="/sort" type="submit" class="btn btn-dark come">
          Getting stated
        </Link>
      </div>
    </div>
  );
};

export default Home;
