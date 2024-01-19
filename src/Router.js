// AppRouter.js
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Logout from "./Logout";
import "./AppRouter.css"; // Import the CSS file for styling

function AppRouter() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
