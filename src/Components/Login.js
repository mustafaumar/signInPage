import React, { useState , useReducer} from "react";
import { FaEnvelopeOpen } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import styles from "./Login.module.css";
const ACTIONS = {
  USER_INPUT: "user-input",
  USER_VALIDATOR: "user-validator",
};
const emailReducer = (state, action) =>{
  switch (action.type) {
    case ACTIONS.USER_INPUT:
      return { handler: action.val, isValid: action.val.includes("@") };
    case ACTIONS.USER_VALIDATOR:
      return { handler: state.handler, isValid: state.handler.includes("@") };
    default:
      return { handler: "" };
  }
}
const passwordReducer =(state, action) =>{
  switch (action.type) {
    case ACTIONS.USER_INPUT:
      return { handler: action.val, isValid: action.val.trim().length> 6};
    case ACTIONS.USER_VALIDATOR:
      return { handler: state.handler, isValid: state.handler.trim().length> 6};
    default:
      return { handler: "" };
  }
}

const Login = () => {
  const[formIsValid, setFormIsValid] = useState(false)

  //Reducers
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    handler: '',
    isValid: null
  })
  const [passwordState, dispatchPassword]= useReducer(passwordReducer, {
    handler: '',
    isValid: null
  })

  const emailChangeHandler = (event) =>{
    dispatchEmail({type: ACTIONS.USER_INPUT, val: event.target.value})
    setFormIsValid(event.target.value.includes('@') && passwordState.isValid);
  }
  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: ACTIONS.USER_INPUT, val: event.target.value });
    setFormIsValid(event.target.value.trim().length> 6 && emailState.isValid);
  };
  const validateEmailHandler = () =>{
    dispatchEmail({ type: ACTIONS.USER_VALIDATOR });
  }
  const validatePasswordHandler = () =>{
    dispatchEmail({ type: ACTIONS.USER_VALIDATOR });
  }
  const submitHandler = (event)=>{
    event.preventDefault()
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className={styles.control} style={{ position: "relative" }}>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            placeholder="example@rocket.gmail"
            value={emailState.handler}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
            style={{
              borderColor: emailState.isValid === false ? "red" : "",
            }}
          />
          <FaEnvelopeOpen
            style={{
              position: "absolute",
              right: "5%",
              top: "53%",
              color: "#7EBCC3",
            }}
          />
        </div>

        <div className={styles.control} style={{ position: "relative" }}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={passwordState.handler}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
            style={{
              borderColor: passwordState.isValid === false ? "red" : "",
            }}
          />
          <FaKey
            style={{
              position: "absolute",
              right: "5%",
              top: "47%",
              color: "#7EBCC3",
            }}
          />
          <a href={"/"} className={styles.forget}>
            Forget Password?
          </a>
        </div>
        <button type="submit" className={styles.button} disabled={!formIsValid}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
