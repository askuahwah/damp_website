import React from "react";
import style from "./course.module.css";

const CourseReview = ({ selectedCourse }) => {
  return (
    <div className={style.courseReview_main}>
      <p className={style.coursereview_main_heading}>Course Review</p>
      {selectedCourse &&
        selectedCourse.map((entry, index) => (
          <>
          <div key={index} className={style.review_a}>
            <p>Course Code: <span>{entry["Course Code"]}</span></p>
            <p>Name: <span>{entry["Name:"]}</span></p>
            <p>Expected Year of Graduation: <span>{entry["Expected Year of Graduation:"]}</span></p>
            <p>Course Code and Name: <span>{entry["Course Code and Name: (for eg. CE324-Engineering Law)"]}</span></p>
            <p>Professor who took the course: <span>{entry["Professor who took the course:"]}</span></p>
            <p>What motivated you to take this course? <span>{entry["What motivated you to take this the course? (for compulsory courses, write N/A)"]}</span></p>
            <p>Are there any pre-requisites for this course? <span>{entry["Are there any pre-requisites for this course? (if none, please write N/A)"]}</span></p>
            <p>Course Content Overview: <span>{entry["Kindly give a brief overview of the course content based on the topics that were covered"]}</span></p>
            <p>Detailed Review: <span>{entry["Please give a detailed review of the course (adding general advice, your overall expereince and some tips would help greatly)"]}</span></p>
            <p>Attendance Policy: <span>{entry["What was the attendance policy when you took the course?"]}</span></p>
            <p>Were the slides provided by the instructor? <span>{entry["Were the slides provided by the instructor?"]}</span></p>
            <p>Semester: <span>{entry['Which semester did you take this course in? (for eg. "In my 6th semester")']}</span></p>
            <p>Difficulty Rating: <span>{entry["What would you rate the course in terms of its difficulty? (on a scale of 10)"]}</span></p>
            <p>References: <span>{entry["What references did you use for this course?"]}</span></p>
            <p>Grading Statistics: <span>{entry["What was the grading statistics when you took the course?"]}</span></p>
          </div>
          <div style={{marginTop: "5%"}}></div>
          </>
        ))}
    </div>
  );
};

export default CourseReview;
