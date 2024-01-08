
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import "./navbar.css"
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
    {/* <div className="navbar_text">
      <p>Civil damp blog</p>
    </div> */}
      <NavLink exact to="/" >
        Home
      </NavLink>
      <NavLink to="/coursereview">
        Course Review
      </NavLink>
    
      <div>
      <NavLink to="/explore">
        Explore
        <FontAwesomeIcon className="icon" icon={faCaretDown} />
      </NavLink>
      </div>
      
      <NavLink to="/faaqs">
        Faaqs
      </NavLink>
      <NavLink to="/link">
        Important Link
      </NavLink>
      <NavLink to="/about">
        About
      </NavLink>
    </nav>
  );
};

export default Navbar;
