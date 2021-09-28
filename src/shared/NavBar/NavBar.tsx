import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from "../../assets/images/logo.svg";

function NavBar() {
  return (
    <div>
      <Link to="/">
        <img src={logo} className="Nav-logo" alt="logo" />
        <p>Anemoi</p>
      </Link>
    </div>
  );
}

export default NavBar;
