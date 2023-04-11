import React from 'react'
import Login from './Login'
import Img from './Img';
import Info from './Info/Info';
import SignIn from './SignIn/SignIn';
import styles from "./UI.module.css";

const UI = () => {
  return (
    <div  className = {styles.container}>
      <Img className= {styles.img} />
      <div>
        <SignIn />
        <Login/>
        <Info />
      </div>
    </div>
  );
}

export default UI
