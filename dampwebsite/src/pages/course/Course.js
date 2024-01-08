import React, { useState, useEffect } from "react";
import style from "./course.module.css";
import Coursename from "./Component/coursename";
import Reviewcourse from "./Component/review";

const Course = () => {
  return (
    <div className={style.course_main}>
      <div className={style.coursename_container}>
        <Coursename />
      </div>
      <div className={style.review_container}>
        <Reviewcourse />
      </div>
    </div>
  );
};

export default Course;
