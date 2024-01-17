import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./internation.module.css";
import RishiImage from "../../assets/rishi.png";

const InternationExposer = () => {

  const Navigate = useNavigate();

  const handleAdityaBlog = ()=> {
    Navigate('/adityablog');
  }

  const handleRishiBlog = ()=> {
    Navigate('/rishiblog');
  }

  const handleShashankBlog = ()=> {
    Navigate('/shashankblog');
  }

  return (
    <div className={style.international_main}>
      <div onClick={handleRishiBlog} className={style.international_details}>
        <div className={style.international_details_img}><img src={RishiImage} alt="rishiphoto"/></div>
        <p className={style.international_details_text}>Rishi Kumar </p>
      </div>
      <div onClick={handleAdityaBlog} className={style.international_details}>
        <div className={style.international_details_img}><img src={RishiImage} alt="rishiphoto"/></div>
        <p className={style.international_details_text}>Aditya Kumar</p>
      </div>
      <div onClick={handleShashankBlog} className={style.international_details}>
        <div className={style.international_details_img}><img src={RishiImage} alt="rishiphoto"/></div>
        <p className={style.international_details_text}> Shashank Nyol</p>
      </div>
    </div>
  );
};

export default InternationExposer;
