import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div>Home</div>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>

        <li>
          <Link to="/Login">Login</Link>
        </li>
        <li>
          <Link to="/Logout">Logout</Link>
        </li>
      </ul>
    </>
  );
}

export default Home;
