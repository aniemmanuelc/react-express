import React from "react";
import { Link } from "react-router-dom";
import Login from "../login/Login";

const Home = () => {
  return (
    <div className="jumbotron">
      <h2>Welcome to the Homepage!</h2>
      <Login />
      <Link to="about" className="btn btn-primary btn-lg">
        Learn more
      </Link>
    </div>
  );
};

export default Home;
