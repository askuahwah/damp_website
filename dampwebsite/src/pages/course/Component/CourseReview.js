import React from "react";

const CourseReview = ({ selectedCourse }) => {
  return (
    <div>
      {selectedCourse && (
        <>
          <h1>ashis</h1>
          <h3>Course Code: {selectedCourse["Course Code"]}</h3>
          <p>Name: {selectedCourse["Name:"]}</p>
        </>
      )}
    </div>
  );
};

export default CourseReview;
    