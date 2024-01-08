import React from 'react'
import style from "./about.module.css";
import About from './component/About';
import Contact from './component/Contact';

const AboutIndex = () => {
  return (
    <div>
      <div><About/></div>
      <div><Contact/></div>
    </div>
  )
}

export default AboutIndex;
