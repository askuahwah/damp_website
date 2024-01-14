  import React, { useState, useEffect } from "react";
  import style from "./course.module.css";
  import Coursename from "./Component/coursename";
 import CourseReview from "./Component/CourseReview";

  const Course = () => {
    return (
      <div className={style.course_main}>
        <div className={style.coursename_container}>
          <Coursename />
        </div>
        <div className={style.review_container}>
        <CourseReview/>
        </div>
      </div>
    );
  };

  export default Course;
