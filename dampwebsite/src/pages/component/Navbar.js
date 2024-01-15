import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [exploreDropdownVisible, setExploreDropdownVisible] = useState(false);
  const [importantDropdownVisible, setImportantDropdownVisible] =
    useState(false);

  const toggleExploreDropdown = () => {
    setExploreDropdownVisible(!exploreDropdownVisible);
  };

  const toggleImportantDropdown = () => {
    setImportantDropdownVisible(!importantDropdownVisible);
  };

  return (
    <nav>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/coursereview">Course Review</NavLink>

      <div className="nav-dropdown">
        <p onClick={toggleExploreDropdown}>
          Explore
          <FontAwesomeIcon className="icon" icon={faCaretDown} />
        </p>
        <div
          className={`dropdown-content ${
            exploreDropdownVisible ? "visible" : "hidden"
          }`}
        >
          <p>BTP</p>
          <p>EERI</p>
          <p>DD Conv.</p>
          <p>Internation Exposer</p>
          <p>Higher Studies</p>
        </div>
      </div>

      <NavLink to="/faaqs">FAQ's</NavLink>
      <div className="nav-dropdown">
        <p onClick={toggleImportantDropdown}>
          Important Link
          <FontAwesomeIcon className="icon" icon={faCaretDown} />
        </p>
        <div
          className={`dropdown-content important ${
            importantDropdownVisible ? "visible" : "hidden"
          }`}
        >
          <p>Option A</p>
          <p>Option B</p>
          <p>Option C</p>
        </div>
      </div>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
};

export default Navbar;
