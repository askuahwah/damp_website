import React, { useState, useEffect } from "react";
import style from "../course.module.css";

const Coursename = () => {
  const first = ["CS 101", "CS 101", "CS 101", "CS 101", "CS 101", "CS 101", "CS 101"];

  return (
    <div className={style.courseName}>
      <div className={style.course_name}>
        <div className={style.course_data}>
          <p>Second Year course</p>
          <div className={style.course_line}></div>
          <ul>
            {first.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </div>
        <div className={style.course_data}>
          <p>Third Year course</p>
          <div className={style.course_line}></div>
          <ul>
            {first.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </div>
        <div className={style.course_data}>
          <p>Fourth Year course</p>
          <div className={style.course_line}></div>
          <ul>
            {first.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </div>
        <div className={style.course_data}>
          <p>Institute Year course</p>
          <div className={style.course_line}></div>
          <ul>
            {first.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </div>
        <div className={style.course_data}>
          <p>Department Elective    </p>
          <div className={style.course_line}></div>
          <ul>
            {first.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Coursename;
