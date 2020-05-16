import React from "react";
import { Route, Switch } from "react-router-dom";

// pages
import Home from "./home/Home";
import About from "./about/About";
import Customers from "./common/customers/Customers";
import PageError from "./error/PageError";

// common
import "./App.css";
import Navbar from "./common/Navbar";

function App() {
  return (
    <div className="container-fluid">
      <Navbar />
      <h1>TodoApp</h1>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/customers" component={Customers} />
        <Route path="/about" component={About} />
        <Route component={PageError} />
      </Switch>
    </div>
  );
}

export default App;
