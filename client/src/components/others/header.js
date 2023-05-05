import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
    <Link className="navbar-brand" to="/">
      <div>
        <img className="img-fluid" src="../../../assets/icon.png" alt="icon" />
      </div>
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link
            className="nav-link active text-light"
            aria-current="page"
            to="/"
          >
            Home
          </Link>
        </li>
        <li className="nav-item dropdown">
          <span
            className="nav-link dropdown-toggle text-light"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Games
          </span>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <Link className="dropdown-item" to="/tamagotchi">
                Tamagotchi
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/rpsls">
                RPSLS
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <span
            className="nav-link dropdown-toggle text-light"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Records
          </span>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <Link className="dropdown-item" to="/tamagotchi/records">
                Tamagotchi
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/rpsls/records">
                RPSLS
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
