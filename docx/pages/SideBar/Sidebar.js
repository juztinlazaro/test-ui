import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Sidebar extends Component {
  render() {
    return (
      <section>
        <NavLink className="home-link" to="/">
          UI Docx
        </NavLink>

        <div className="sidebar-container">
          <NavLink
            activeClassName="activeLink"
            className="link"
            exact
            to="/guidelines"
          >
            Guide lines
          </NavLink>

          <NavLink
            className="link"
            activeClassName="activeLink"
            exact
            to="/colorscheme"
          >
            Color Scheme
          </NavLink>

          <NavLink
            className="link"
            activeClassName="activeLink"
            exact
            to="/loading"
          >
            Loading
          </NavLink>

          <NavLink
            className="link"
            activeClassName="activeLink"
            exact
            to="/panel"
          >
            Panel
          </NavLink>

          <NavLink
            className="link"
            activeClassName="activeLink"
            exact
            to="/helpers"
          >
            Helpers
          </NavLink>

          <NavLink
            className="link"
            activeClassName="activeLink"
            exact
            to="/slate"
          >
            Slate
          </NavLink>

          <NavLink
            className="link"
            activeClassName="activeLink"
            exact
            to="/wysiwyg"
          >
            Wysiwyg
          </NavLink>

          <NavLink
            className="link"
            activeClassName="activeLink"
            exact
            to="/buttons"
          >
            Buttons
          </NavLink>
        </div>
      </section>
    );
  }
}

export default Sidebar;
