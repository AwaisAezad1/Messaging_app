import { useState } from "react";
import { auth } from "../config/Firebase";
import styles from "./Auth.module.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useUser } from "../context/UserProvider";

function Auth() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [fullName, setfullName] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [licenseNumber, setlicenseNumber] = useState("");
  const navigate = useNavigate();
  const { signUp } = useUser();

  // Function to update fullName state when firstname or lastname changes
  const updateFullName = () => {
    const updatedFullName = (firstname || "") + " " + (lastname || "");
    setfullName(updatedFullName.trim() || "");
  };

  const signupHandler = () => {
    if (email && password && fullName && phoneNumber && licenseNumber) {
      signUp(email, password, fullName, phoneNumber, licenseNumber);
    }
  };

  return (
    <div className={styles.Authmain}>
      <div className={styles.box}>
        <img src={logo} alt="logo" />
        <input
          type="text"
          placeholder="Firstname"
          onChange={(e) => {
            setFirstname(e.target.value);
            updateFullName(); // Update fullName when firstname changes
          }}
        />
        <input
          type="text"
          placeholder="Lastname"
          onChange={(e) => {
            setLastname(e.target.value);
            updateFullName(); // Update fullName when lastname changes
          }}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setemail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setpassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="FullName"
          value={fullName} // Display the computed fullName
          readOnly
        />
        <input
          type="text"
          placeholder="PhoneNumber"
          onChange={(e) => setphoneNumber(e.target.value)}
        />
        <input
          type="text"
          placeholder="LicenseNumber"
          onChange={(e) => setlicenseNumber(e.target.value)}
        />
        <button onClick={signupHandler}>Sign Up</button>
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
