import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logOut } from "../redux/authSlice";
import Login from "../auth/login/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Dashboard.css";
import HomePage from './HomePage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Dashboard = () => {
  const dispatch = useDispatch();
  const SESSION = useSelector((state) => state.auth);
  const [signIn, setSignIn] = useState(false);
  const onClickSignOut = () => {
    dispatch(logOut());
    setSignIn(false);
  };

  const onClickSignIn = () => {
    setSignIn(true);
  };

  const handleSignIn = () => {
    setSignIn(!signIn);
  };

  return (
    <div>
      <div className="dashboard-div">
        <div container mt-4container mt-4>
          <div className="row">
            <div className="col-lg-8 col-12">
              <h3>CR Hotel Management System</h3>
            </div>
            <div className="col-lg-3 col-12">
              {SESSION.isLoggedIn ? (
                <div>
                  <h4>Hello {SESSION.username} !</h4>
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div className="col-lg-1 col-12">
              {SESSION.isLoggedIn ? (
                <div>
                  <button onClick={onClickSignOut} className="btn btn-warning">
                    Sign Out
                  </button>
                </div>
              ) : (
                <button onClick={onClickSignIn} className="btn btn-success">
                  Sign In
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div>{signIn ? <Login handleSignIn={handleSignIn} /> : <div></div>}</div>
      <div>
      <Router>
      <div>
        {/* Navigation Links */}
        {/* <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav> */}

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} /> */}
        </Routes>
      </div>
    </Router>
      </div>
    </div>
  );
};

export default Dashboard;
