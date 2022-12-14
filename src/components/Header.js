import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <h9>JokesNorris</h9>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/TronaldDump"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <h9>TronaldDump</h9>
            </NavLink>
          </li>
        </ul>
      </nav>
      <h1>TRY TO NOT LAUGH 100% IMPOSSIBLE CHALLENGE</h1>
    </div>
  );
};

export default Header;
