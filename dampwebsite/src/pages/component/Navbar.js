import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [exploreDropdownVisible, setExploreDropdownVisible] = useState(false);
  const [importantDropdownVisible, setImportantDropdownVisible] =
    useState(false);
  const [courseReviewDropdownVisible, setCourseReviewDropdownVisible] =
    useState(false);

  const exploreDropdownTimerRef = useRef(null);
  const importantDropdownTimerRef = useRef(null);
  const courseReviewDropdownTimerRef = useRef(null);

  const showExploreDropdown = () => {
    clearTimeout(exploreDropdownTimerRef.current);
    setExploreDropdownVisible(true);
  };

  const hideExploreDropdown = () => {
    exploreDropdownTimerRef.current = setTimeout(() => {
      setExploreDropdownVisible(false);
    }, 150); // Adjust the delay as needed (in milliseconds)
  };

  const showImportantDropdown = () => {
    clearTimeout(importantDropdownTimerRef.current);
    setImportantDropdownVisible(true);
  };

  const hideImportantDropdown = () => {
    importantDropdownTimerRef.current = setTimeout(() => {
      setImportantDropdownVisible(false);
    }, 150); // Adjust the delay as needed (in milliseconds)
  };

  const showCourseReviewDropdown = () => {
    clearTimeout(courseReviewDropdownTimerRef.current);
    setCourseReviewDropdownVisible(true);
  };

  const hideCourseReviewDropdown = () => {
    courseReviewDropdownTimerRef.current = setTimeout(() => {
      setCourseReviewDropdownVisible(false);
    }, 150); // Adjust the delay as needed (in milliseconds)
  };

  return (
    <nav>
      <NavLink exact to="/">
        Home
      </NavLink>
      <div
        className="nav-dropdown"
        onMouseEnter={showCourseReviewDropdown}
        onMouseLeave={hideCourseReviewDropdown}
      >
        <NavLink to="/coursereview">
          Course Review
          <FontAwesomeIcon className="icon" icon={faCaretDown} />
        </NavLink>
        <div
          className={`dropdown-content ${
            courseReviewDropdownVisible ? "visible" : "hidden"
          }`}
        >
          <a href="/secondreview">Second Year Course</a>
          <a href="/thirdreview">Third Year Course</a>
          <a href="/fourthreview">Fourth Year Course</a>
          <a href="/departmentreview">Department Review</a>
          <a href="/institutereview">Institute Review</a>
          <a href="/minorreview">Minor Review</a>
        </div>
      </div>

      <div
        className="nav-dropdown"
        onMouseEnter={showExploreDropdown}
        onMouseLeave={hideExploreDropdown}
      >
        <p>
          Explore
          <FontAwesomeIcon className="icon" icon={faCaretDown} />
        </p>
        <div
          className={`dropdown-content ${
            exploreDropdownVisible ? "visible" : "hidden"
          }`}
        >
          <a href="/">BTR & DD</a>
          <a href="/eeripage">EERI</a>
          <a href="/higherstudies">Higher Studies</a>
          <a href="/internationexposer">Internation Exposer</a>
        </div>
      </div>

      <NavLink to="/faaqs">FAQ's</NavLink>
      <div
        className="nav-dropdown"
        onMouseEnter={showImportantDropdown}
        onMouseLeave={hideImportantDropdown}
      >
        <p>
          Important Link
          <FontAwesomeIcon className="icon" icon={faCaretDown} />
        </p>
        <div
          className={`dropdown-content important ${
            importantDropdownVisible ? "visible" : "hidden"
          }`}
        >
          <a href="/https://www.iitb.ac.in/newacadhome/circular.jsp">Circular</a>
          <a href="/https://www.iitb.ac.in/en/about-iit-bombay/iit-bombay-holidays-list">List of Holidays</a>
          <a href="/https://www.iitb.ac.in/newacadhome/timetable.jsp">Time Tables</a>
          <a href="/https://www.iitb.ac.in/newacadhome/toacadcalender.jsp">Academic Calendar</a>
          <a href="/https://www.civil.iitb.ac.in/">Department Website</a>
          <a href="/https://www.civil.iitb.ac.in/GENERAL/ugdd.pdf">UG Curriculum</a>
          <a href="/https://drive.google.com/file/d/1IoJ3qLBpsWafaLuci5hGq8d1vbmYfvwP/view">Course Info Booklet</a>
          <a href="/https://gymkhana.iitb.ac.in/~ugacademics/UGInfo.pdf">UG Info Booklet</a>
          <a href="/https://drive.google.com/file/d/12LDC5v3Uw6CI_KmcCErC1kt3yHRm7iGJ/view">Internship Preparation Blog</a>
        </div>
      </div>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
};

export default Navbar;
