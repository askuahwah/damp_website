import React from 'react';
import data from '../../../data/Feedback';

const CourseReview = () => {
  return (
    <div>
      {data.map((course, index) => (
        <div key={index}>
          <h1>{course["Course Code and Name: (for eg. CE324-Engineering Law)"]}</h1>
          <p><strong>Name:</strong> {course["Name:"]}</p>
          <p><strong>Expected Year of Graduation:</strong> {course["Expected Year of Graduation:"]}</p>
          <p><strong>Professor:</strong> {course["Professor who took the course:"]}</p>
          <p><strong>Motivation:</strong> {course["What motivated you to take this the course? (for compulsory courses, write N/A)"]}</p>
          <p><strong>Pre-requisites:</strong> {course["Are there any pre-requisites for this course? (if none, please write N/A)"]}</p>
          <p><strong>Course Content Overview:</strong> {course["Kindly give a brief overview of the course content based on the topics that were covered"]}</p>
          <p><strong>Course Review:</strong> {course["Please give a detailed review of the course (adding general advice, your overall expereince and some tips would help greatly)"]}</p>
          <p><strong>Attendance Policy:</strong> {course["What was the attendance policy when you took the course?"]}</p>
          <p><strong>Slides Provided:</strong> {course["Were the slides provided by the instructor?"]}</p>
          <p><strong>Semester:</strong> {course["Which semester did you take this course in? (for eg. \"In my 6th semester\")"]}</p>
          <p><strong>Difficulty Rating:</strong> {course["What would you rate the course in terms of its difficulty? (on a scale of 10)"]}</p>
          <p><strong>References:</strong> {course["What references did you use for this course?"]}</p>
          <p><strong>Grading Statistics:</strong> {course["What was the grading statistics when you took the course?"]}</p>
        </div>
      ))}
    </div>
  );
}

export default CourseReview;
