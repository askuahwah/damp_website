import React, { useState } from "react";
import style from "../course.module.css";
import SecondCourse from "../../../data/CourseReviewData/Second";
import ThirdCourse from "../../../data/CourseReviewData/Third";
import FourthCourse from "../../../data/CourseReviewData/Fourth";
import InstituteElective from "../../../data/CourseReviewData/I";
import DepartmentElective from "../../../data/CourseReviewData/D";
import CourseReview from './CourseReview';

const Coursename = () => {
  const uniqueCourseCodes = new Set();

  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleCourseCodeClick = (courseCode) => {
    const selectedCourseData = findCourseData(courseCode);
    setSelectedCourse(selectedCourseData);
  };

  const findCourseData = (courseCode) => {
    const allCourses = [...SecondCourse, ...ThirdCourse, ...FourthCourse, ...InstituteElective, ...DepartmentElective];
    return allCourses.find((course) => course["Course Code"] === courseCode);
  };

  return (
    <div className={style.courseName}>
      <div className={style.course_name}>
        <div className={style.course_data}>
          <p>Second Year course</p>
          <div className={style.course_line}></div>
          <ul>
            {SecondCourse.map((review, index) => {
              const courseCode = review["Course Code"];
              if (!uniqueCourseCodes.has(courseCode)) {
                uniqueCourseCodes.add(courseCode);
                return <li key={index} onClick={() => handleCourseCodeClick(courseCode)}>{courseCode}</li>;
              }
              return null;
            })}
          </ul>
        </div>
        <div className={style.course_data}>
          <p>Third Year course</p>
          <div className={style.course_line}></div>
          <ul>
            {ThirdCourse.map((review, index) => {
              const courseCode = review["Course Code"];
              if (!uniqueCourseCodes.has(courseCode)) {
                uniqueCourseCodes.add(courseCode);
                return <li key={index} onClick={() => handleCourseCodeClick(courseCode)}>{courseCode}</li>;
              }
              return null;
            })}
          </ul>
        </div>
        <div className={style.course_data}>
          <p>Department Elective</p>
          <div className={style.course_line}></div>
          <ul>
            {DepartmentElective.map((review, index) => {
              const courseCode = review["Course Code"];
              if (!uniqueCourseCodes.has(courseCode)) {
                uniqueCourseCodes.add(courseCode);
                return <li key={index} onClick={() => handleCourseCodeClick(courseCode)}>{courseCode}</li>;
              }
              return null;
            })}
          </ul>
        </div>
        <div className={style.course_data}>
          <p>Fourth course</p>
          <div className={style.course_line}></div>
          <ul>
            {FourthCourse.map((review, index) => {
              const courseCode = review["Course Code"];
              if (!uniqueCourseCodes.has(courseCode)) {
                uniqueCourseCodes.add(courseCode);
                return <li key={index} onClick={() => handleCourseCodeClick(courseCode)}>{courseCode}</li>;
              }
              return null;
            })}
          </ul>
        </div>
        <div className={style.course_data}>
          <p>Third Year course</p>
          <div className={style.course_line}></div>
          <ul>
            {ThirdCourse.map((review, index) => {
              const courseCode = review["Course Code"];
              if (!uniqueCourseCodes.has(courseCode)) {
                uniqueCourseCodes.add(courseCode);
                return <li key={index} onClick={() => handleCourseCodeClick(courseCode)}>{courseCode}</li>;
              }
              return null;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Coursename;
