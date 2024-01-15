import React from "react";
import style from "./home.module.css";

const BrowseCourse = () => {
  return (
    <div className={style.browse_course}>
      <div className={style.browse_course_text}>
        <p>Browse Courses...</p>
      </div>
      <div className={style.browse_course_container}>
        <div className={style.browse_course_detail}>
          <div className={style.browse_course_detail_background}>
            <p>CS</p>
          </div>
          <p className={style.browse_course_text_a}>Core Course</p>
        </div>
        <div className={style.browse_course_detail}>
          <div className={style.browse_course_detail_background}>
            <p>M</p>
          </div>
          <p className={style.browse_course_text_a}>Minor</p>
        </div>
        <div className={style.browse_course_detail}>
          <div className={style.browse_course_detail_background}>
            <p>IE</p>
          </div>
          <p className={style.browse_course_text_a}>Institute Elective</p>
        </div>
        <div className={style.browse_course_detail}>
          <div className={style.browse_course_detail_background}>
            <p>DE</p>
          </div>
          <p
            className={style.browse_course_text_a}
            style={{ fontSize: "1.3rem" }}
          >
            Department Elective
          </p>
        </div>
      </div>
    </div>
  );
};

export default BrowseCourse;
