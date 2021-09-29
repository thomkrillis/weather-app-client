import React from 'react';

import './Spinner.css';
import logo from '../../assets/images/logo.svg';

function Spinner({ fast = false}) {
  const classes = fast ? 'Home-logo fast' : 'Home-logo';
  return (
    <img src={logo} className={classes} alt="logo" />
  );
}

export default Spinner;
