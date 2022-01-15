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
    <div classname ="Home">
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
                  <h4 className="name">{user[0].name}</h4>
                  <button
                    type="submit"
                    class="logout_Btn"
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
        <img
          src="https://assets.digitalocean.com/articles/alligator/js/bubble-selection-insertion-sort/o/selection-sort.gif"
          alt="sorting gif"
          className="Sorting"
        />
        {/* <img
          src="https://elgorithmi.com/wp-content/uploads/2020/11/selection-sort-animation.gif"
          alt="sorting gif"
          className="Sorting1"
        /> */}

        <h3 className="more">
          Sorting is a very classic problem of reordering items (that can be
          compared, e.g., integers, floating-point numbers, strings, etc) of an
          array in a certain order, decreasing, non-increasing.
        </h3>
        <Link to="/Info" type="submit" class="btn btn-dark come1">
          For more Sorting Algorithms understanding
        </Link>
        <Link to="/sort" type="submit" class="btn btn-dark come">
          Getting started
        </Link>
      </div>
    </div>
  );
};

export default Home;
