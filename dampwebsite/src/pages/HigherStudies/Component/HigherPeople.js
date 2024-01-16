import React from "react";
import HigherStudiesContent from "../../../data/HigherStudiesData";
import style from "../higherstudies.module.css";

const HigherPeople = () => {
  return (
    <div className={style.higherpeople_main}>
    <div className={style.higherpeople_main_heading}><p>Higher Studies</p></div>
      <div className={style.higherpeople_table}>
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Degree</td>
              <td>Institution</td>
              <td>Admission Year</td>
              <td>Field</td>
              <td>Specialization</td>
            </tr>
          </thead>
          <tbody>
            {HigherStudiesContent.map((profile, index) => (
              <tr key={index}>
                <td>{profile.name}</td>
                <td>{profile.education.degree}</td>
                <td>{profile.education.institution}</td>
                <td>{profile.education.admission_year}</td>
                <td>{profile.education.field}</td>
                <td>{profile.education.specialization}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HigherPeople;
