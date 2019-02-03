import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <div className="hero-head container is-fluid">
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <a className="navbar-item">
          {/* <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" /> */}
          <p> Crypto Currency</p>
        </a>

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
        {/* <div className="navbar-start">
        <a className="navbar-item" href="https://bulma.io/">
          Home
        </a>
        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link" href="https://bulma.io/documentation/overview/start/">
            Docs
          </a>
          <div className="navbar-dropdown is-boxed">
            <a className="navbar-item" href="https://bulma.io/documentation/overview/start/">
              Overview
            </a>
            <a className="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
              Modifiers
            </a>
            <a className="navbar-item" href="https://bulma.io/documentation/columns/basics/">
              Columns
            </a>
            <a className="navbar-item" href="https://bulma.io/documentation/layout/container/">
              Layout
            </a>
            <a className="navbar-item" href="https://bulma.io/documentation/form/general/">
              Form
            </a>
            <hr className="navbar-divider" />
            <a className="navbar-item" href="https://bulma.io/documentation/elements/box/">
              Elements
            </a>
            <a className="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
              Components
            </a>
          </div>
        </div>
      </div>

      <div className="navbar-end">
      </div> */}
      </div>
    </nav>
  </div>
);

export default Nav;