import React from "react";
import mobile from "../Components/Images/mobile.png";
import desktop from "../Components/Images/desktop.png";
import styles from './Img.module.css'
const Img = () => {
  return (
    <div className={styles.image}>
      <img
        src={mobile}
        alt={"background-mobile"}
        className= {styles.mobile}
        loading= 'eager'
      />
      <img src={desktop} alt={"background-desktop"} className={styles.desktop} />
    </div>
  );
};

export default Img;
