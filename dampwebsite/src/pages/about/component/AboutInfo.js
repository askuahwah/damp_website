import React from "react";
import style from "../component/../about.module.css";

const AboutInfo = () => {
  return (
    <div className={style.AboutInfo_main}>
      <div className={style.AboutInfo_heading}>
        <p>About us</p>
      </div>
      <div className={style.AboutInfo_details}>
        <p>
          D-AMP stands for the Department Academic Mentorship Program. It
          comprises of two D-AMP Coordinators that oversee the program for the
          Civil Department and around thirty mentors. As the name suggests, we
          help students in their academic endeavours by providing them personal
          guidance and mentorship in order to smoothen their transition from
          freshmen year to sophomore year. As the D-AMP team, we always
          endeavour to go a step further and address the non academic and career
          related concerns of our mentees in order to provide a holistic
          mentorship experience.
        </p>
      </div>
    </div>
  );
};

export default AboutInfo;
