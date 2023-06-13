import styles from "./Info.module.css";
import { FaGoogle } from "react-icons/fa";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./../../firebase";

const provider = new GoogleAuthProvider();
const SignGoogle = () => {
  const Login = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        alert(`Dear ${result.user.providerData[0].displayName} , Sign-in successful.`)
      })
      .catch((error) => {
        alert('There is a problem with your Internet');
        // ...
      });
  };
  return (
    <div>
      <button onClick={Login} className={styles.signButton}>
        <i>
          <FaGoogle />
        </i>
        <span>Sign in with Google</span>
      </button>
    </div>
  );
};

export default SignGoogle;
