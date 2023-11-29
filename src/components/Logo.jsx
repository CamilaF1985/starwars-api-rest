import React from 'react';
import logo from '../assets/img/logo.png';

const Logo = () => (
  <a className="navbar-brand" href="#">
    <img src={logo} alt="Logo" height="60" className="d-inline-block align-top" />
  </a>
);

export default Logo;
