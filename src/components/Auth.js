import { useState } from "react";
import styles from "./Auth.module.css";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useUser } from "../context/UserProvider";
import buttonBackgroundImage from "../assets/images/button_background.png";

function Auth() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [fullName, setfullName] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [licenseNumber, setlicenseNumber] = useState("");
  const navigate = useNavigate();
  const { signUp } = useUser();

  const signupHandler = () => {
    if (email && password && fullName && phoneNumber && licenseNumber) {
      signUp(email, password, fullName, phoneNumber, licenseNumber);
    }
  };

  return (
    <div className={styles.Authmain}>
      <div className={styles.box}>
        <img src={logo} alt="logo" />
        <label>
          Fullname
          <input
            type="text"
            placeholder="Enter your Fullname"
            onChange={(e) => {
              setfullName(e.target.value);
            }}
          />
        </label>

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
        <label>
          PhoneNumber
          <input
            type="text"
            placeholder="Enter your PhoneNumber"
            onChange={(e) => setphoneNumber(e.target.value)}
          />
        </label>
        <label>
          LicenseNumber
          <input
            type="text"
            placeholder="Enter your LicenseNumber"
            onChange={(e) => setlicenseNumber(e.target.value)}
          />
        </label>
        <div className={styles.privacyPolicy}>
          <input
            type="radio"
            id="privacy"
            name="privacyPolicy"
            value="privacy"
          />
          <span>User agrees to the terms of service and privacy policy</span>
        </div>
        <label>
          <button
            onClick={signupHandler}
            style={{
              backgroundImage: `url(${buttonBackgroundImage})`,
            }}
          >
            SIGN UP
          </button>
        </label>
        <span>
          Already have an account?{" "}
          <NavLink to={"Signin"} className={styles.btn}>
            SignIn
          </NavLink>
        </span>
      </div>
    </div>
  );
}

export default Auth;
