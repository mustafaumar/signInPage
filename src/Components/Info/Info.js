import React from "react";
import styles from "./Info.module.css";
import { FaGoogle } from "react-icons/fa";

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
      <button className={styles.signButton}>
        <i>
          <FaGoogle />
        </i>
        <span>Sign in with Google</span>
      </button>
    </div>
  );
};

export default Info;
