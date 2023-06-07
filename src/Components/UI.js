import React from "react";
import Login from "./Login";
import Img from "./Img";
import Info from "./Info/Info";
import SignIn from "./SignIn/SignIn";
import styles from "./UI.module.css";

const UI = () => {
  // const [isOnline, setIsOnline] = useState(navigator.onLine);
  // useEffect(() => {
  //   const checkInternetConnection = async () => {
  //     const response = await fetch("https://www.google.com");
  //     setIsOnline(response.status === 200);
  //   };

  //   checkInternetConnection();
  // }, []);
  return (
    <div className={styles.container}>
      <Img className={styles.img} />
      <div>
        <SignIn />
        {/* {isOnline ? (
          <p>You are connected to the internet.</p>
        ) : (
          <p>You are offline.</p>
        )} */}
        <Login />
        <Info />
      </div>
    </div>
  );
};

export default UI;

//     return (
//         <div>
//             <h1>Sign In</h1>
//
//         </div>
//     );
// };
