import React from 'react'
import style from "./home.module.css";
import BrowseCourse from './BrowseCourse';
import Explore from './Explore';
import Youtube from "./Youtube";
import Footer from '../component/footer';

const HOME = () => {
  return (
    <>
    <div className={style.home_main}>
      <div className={style.main_text}><p>Civil Damp Blog</p></div>
      <div className={style.background_image}>
        <div><p>WELCOME TO</p></div>
        <div><p>D-AMP CIVIL DEPARTMENT</p></div>
      </div>
      <div><BrowseCourse/></div>
      <div><Explore/></div>
      <div><Youtube/></div>
    </div>
    <div><Footer/></div>
    </>
  )
}

export default HOME;
