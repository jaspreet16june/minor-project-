import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
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
            <div class="navbar-nav">
              <Link to="/signup" type="submit" class="btn btn-primary">
                SIGN UP
              </Link>
              <Link to="/login" type="submit" class="btn btn-primary">
                LOGIN
              </Link>
            </div>
          </div>
        </div>
      </nav>
   
      <div className=" mid">
        <h3 className ="info">
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
