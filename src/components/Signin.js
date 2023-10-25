import { useState } from "react";
import { auth } from "../config/Firebase";
import styles from "./Signin.module.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useUser } from "../context/UserProvider";
import buttonBackgroundImage from "../assets/images/button_background.png";

function SignIn() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const { login } = useUser();

  /*const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        alert("SignIn successful!");
        console.log(result);
        setTimeout(() => {
          navigate("/Messages");
        }, 500);
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
        alert(error.message);
      });
  };*/

  const signinHandler = () => {
    if (email && password) {
      console.log(email, password);
      login(email, password);
    }
  };

  return (
    <div className={styles.SignInmain}>
      <div className={styles.box}>
        <img src={logo} alt="logo" />
        <label>
          Email
          <input
            type="email"
            placeholder="Enter your Email"
            onChange={(e) => setemail(e.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            placeholder="Enter your Password"
            onChange={(e) => setpassword(e.target.value)}
          />
        </label>
        <button
          onClick={signinHandler}
          style={{
            backgroundImage: `url(${buttonBackgroundImage})`,
          }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
export default SignIn;
