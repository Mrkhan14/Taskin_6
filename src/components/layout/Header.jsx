import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import "./Header.css";

export class Header extends Component {
  render() {
    return (
      <header>
        <Container>   
          <ul className="nav d-flex justify-content-start">
            <li className="nav-item me-4">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item me-4">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item me-4">
              <NavLink className="nav-link" to="/posts">
                Posts
              </NavLink>
            </li>
          </ul>
        </Container>
      </header>
    );
  }
}

export default Header;
