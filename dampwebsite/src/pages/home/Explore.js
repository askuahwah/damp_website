import React from 'react'
import style from "./home.module.css"

const Explore = () => {
  return (
    <div className={style.explore_main}>
    <div className={style.browse_course_text}><p>Explore...</p></div>
    <div className={style.explore_course_container}>
        <div className={style.explore_course_container_detail}></div>
        <div className={style.explore_course_container_detail}></div>
        <div className={style.explore_course_container_detail}></div>
        <div className={style.explore_course_container_detail}></div>
    </div>
    </div>
  )
}

export default Explore;
