import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <div className="hero-head">
    <div className="container is-fluid">
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick="document.querySelector('.navbar-menu).classList.toggle('is-active')">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <NavLink to="/" className="navbar-item">
            Home
          </NavLink>
        </div>
      </nav>
    </div>
  </div>
);

export default Nav;