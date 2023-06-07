import React from "react";
import styles from "./Info.module.css";
import SignGoogle from "./SignGoogle";

const Info = (props) => {

  return (
    <div>
      <div>
        <p className={styles.new}>
          Are you new here?
          <a href={"/"} className={styles.signHere}>
            Sign Up
          </a>
        </p>
      </div>
      <p className={styles.dashed}>Or</p>
      <SignGoogle/>
    </div>
  );
};

export default Info;
