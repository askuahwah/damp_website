import React from 'react'
import style from "./about.module.css";
import FrontCard from './component/FrontCard';
import Contact from './component/Contact';
import BackCard from './component/BackCard';

const AboutIndex = () => {
  return (
    <div>
      <div><FrontCard/></div>
      <div><Contact/></div>
    </div>
  )
}

export default AboutIndex;
