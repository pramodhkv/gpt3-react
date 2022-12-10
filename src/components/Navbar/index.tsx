import React from "react";
import { RiMenuFill } from "react-icons/ri";

import "./styles.scss";

const NavbarLinks = () => {
  return (
    <>
      <a className="nav-link" href="/">
        Home
      </a>
      <a className="nav-link" href="#wgpt3">
        What is GPT?
      </a>
      <a className="nav-link" href="#possibility">
        Open AI
      </a>
      <a className="nav-link" href="#features">
        Case Studies
      </a>
      <a className="nav-link" href="#blog">
        Library
      </a>
    </>
  );
};

const Navbar = () => {
  return (
    <nav className="Navbar navbar">
      <div className="container-fluid d-none d-lg-flex gap-3 align-items-center">
        <a className="navbar-brand" href="/">
          <img src="/assets/logo.svg" alt="Logo" />
        </a>

        <NavbarLinks />

        <div className="Navbar__btn-container d-flex gap-2">
          <button className="btn btn-link">Login</button>

          <button className="custom-btn">Sign up</button>
        </div>
      </div>

      <div className="container-fluid d-lg-none d-flex justify-content-between align-items-center">
        <a className="navbar-brand" href="/">
          <img src="/assets/logo.svg" alt="Logo" />
        </a>

        <RiMenuFill className="Navbar__menu-icon" color="white" size={27} />
      </div>
    </nav>
  );
};

export default Navbar;
