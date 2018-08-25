import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavBar extends Component {
	render() {
		return (
			<nav className="navbar" role="banner">
        <ul className="nav" role="navigation">
          <li className="nav__item" itemProp="name">
            <NavLink className="nav__link" itemProp="url" exact={true} to="/">
              Home
            </NavLink>
          </li>
          <li className="nav__item" itemProp="name">
            <NavLink className="nav__link" itemProp="url" to="/about">
              About
            </NavLink>
          </li>
          <li className="nav__item" itemProp="name">
            <NavLink className="nav__link" itemProp="url" to="/not-found-url">
              404
            </NavLink>
          </li>
        </ul>
			</nav>
		);
	}
}
