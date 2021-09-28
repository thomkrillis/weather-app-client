import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from "../../assets/images/logo.svg";

function NavBar() {
  return (
    <div className="Nav-bar">
      <Link to="/">
        <img src={logo} className="Nav-logo" alt="logo" />
      </Link>
      <h1>Anemoi</h1>
    </div>
  );
}

export default NavBar;
