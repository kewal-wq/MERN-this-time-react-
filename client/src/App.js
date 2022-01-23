// import Axios from "axios";
import React from "react";
// import { useState, useEffect } from "react";
import About from "./Pages/About.js";
import AllUsers from "./Pages/AllUsers.js";
import CreateUser from "./Pages/CreateUser.js";
import Home from "./Pages/Home.js";
import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return(

    <>
   
    <Router>
      <ul>
      <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/getUsers">All Users</Link>
        </li>
        <li>
          <Link to="/createUser">Create a User</Link>
        </li>
      </ul>
      <Routes>
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/about' element={<About />}></Route>
      <Route exact path='/getUsers' element={<AllUsers />}></Route>
      <Route exact path='/createUser' element={<CreateUser />}></Route>
       
    </Routes>
    </Router>
    </>
  )
}

export default App;



