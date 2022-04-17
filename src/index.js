import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/nav";
import Home from "./components/Home/Home.js";
import Destination from "./components/Destination";
import Crew from "./components/Crew";
import Technology from "./components/Technology";

ReactDOM.render(
  <Router>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Destination" element={<Destination />} />
      <Route path="/Crew" element={<Crew />} />
      <Route path="/Technology" element={<Technology />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);
