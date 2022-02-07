import * as React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  let activeStyle = {
    textDecoration: "underline"
  };

  let activeClassName = "underline"

  return (
    <nav>
      <ul>
      <li>
          <NavLink
            to="createaccount"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Create Account
          </NavLink>
        </li>
      <li>
          <NavLink
            to="login"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to="vocab"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Vocab
          </NavLink>
        </li>
        <li>
          <NavLink
            to="notes"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Notes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
          >
            {({ isActive }) => (
              <span className={isActive ? activeClassName : undefined}>
                Home
              </span>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
