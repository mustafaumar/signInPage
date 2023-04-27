import React from "react";
import styles from "./Info.module.css";
import { FaGoogle } from "react-icons/fa";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";
const SignGoogle = () => {
  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );
        // console.log(res.data);
        alert(`Welcome ${res.data.name}`)
      } catch (err) {
        // console.log(err);
        alert('An error encountered. Check the data connection')
      }
    }, //console.log(tokenResponse),
  });
  return (
    <React.Fragment>
      <button onClick={login} className={styles.signButton}>
        <i>
          <FaGoogle />
        </i>
        <span>Sign in with Google</span>
      </button>
    </React.Fragment>
  );
};

export default SignGoogle;
