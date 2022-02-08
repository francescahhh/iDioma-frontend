import * as React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

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
            to="/"
          >
            {({ isActive }) => (
              <span className={isActive ? activeClassName : undefined}>
                Home 
              </span>
            )}
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
        <button
          onClick={() => {
            localStorage.setItem('jwt', '');
            navigate('/login');
          }}
        >
          Logout
        </button>
      </ul>
    </nav>
  );
}

export default NavBar;
