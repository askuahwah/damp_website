import React from "react";
import { useNavigate } from "react-router-dom";
import Photo from "../../assets/rishi.png";
import style from "./btp.module.css";

const Btpdd = () => {
  const Navigate = useNavigate();

  const handlePraptiBlog = ()=> {
    Navigate('/praptiblog');
  }
  
  const handleSwastiBlog = ()=> {
    Navigate('/swastiblog');
  }

  const handleAlakhBlog = ()=> {
    Navigate('/alakhblog');
  }

  const handleIshitaBlog = ()=> {
    Navigate('/ishitablog');
  }

  const handlePintuBlog = ()=> {
    Navigate('/pintublog');
  }

  return (
    <div className={style.btpdd_main}>
      <div className={style.btpdd_main_a}>
        <div onClick={handlePraptiBlog} className={style.btpdd_details}>
          <div className={style.btpdd_details_img}>
            <img src={Photo} alt="photoof" />
          </div>
          <p className={style.btpdd_details_text}>Prapti Sao(Transport)</p>
        </div>
        <div onClick={handleSwastiBlog} className={style.btpdd_details}>
          <div className={style.btpdd_details_img}>
            <img src={Photo} alt="photoof" />
          </div>
          <p className={style.btpdd_details_text}>Swasti Pahuja(AI/ML)</p>
        </div>
        <div onClick={handleAlakhBlog} className={style.btpdd_details}>
          <div className={style.btpdd_details_img}>
            <img src={Photo} alt="photoof" />
          </div>
          <p className={style.btpdd_details_text}>Alakh Agarwal(AI/ML)</p>
        </div>
      </div>
      <div className={style.btpdd_main_a} style={{ marginTop: "3%" }}>
        <div onClick={handleIshitaBlog} className={style.btpdd_details}>
          <div className={style.btpdd_details_img}>
            <img src={Photo} alt="photoof" />
          </div>
          <p className={style.btpdd_details_text}>
            Ishit Garg(Transport AI/ML)
          </p>
        </div>
        <div onClick={handlePintuBlog} className={style.btpdd_details}>
          <div className={style.btpdd_details_img}>
            <img src={Photo} alt="photoof" />
          </div>
          <p className={style.btpdd_details_text}>Pintu Kumar Saw(Geotech)</p>
        </div>
      </div>
    </div>
  );
};

export default Btpdd;
