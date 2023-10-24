import styles from "./Navbar.module.css";
import logo from "../assets/images/logo.png";
import color from "../assets/constants/color.json";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserProvider";

function Navbar() {
  const { logout } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const options = ["Signout"];
  const navigate = useNavigate();

  return (
    <div
      className={styles.Navbar}
      style={{ background: color.message_display_navbarandfooter }}
    >
      <div className={styles.topbar}>
        <div className={styles.account}>
          <NavLink to={""}>
            <img src={logo} alt="" />
          </NavLink>
        </div>
        <div className={styles.navbar_right}>
          <NavLink className={styles.nav_link} to={""}>
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/ffffff/sf-regular-filled/48/groups.png"
              alt="groups"
            />
          </NavLink>
          <NavLink className={styles.nav_link} to={""}>
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/ffffff/external-bearicons-detailed-outline-bearicons/64/external-Stories-social-media-bearicons-detailed-outline-bearicons.png"
              alt="external-Stories-social-media-bearicons-detailed-outline-bearicons"
            />
          </NavLink>
          <NavLink className={styles.nav_link} to={""}>
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/ffffff/external-outline-black-m-oki-orlando/24/external-channels-digital-marketing-outline-outline-black-m-oki-orlando.png"
              alt="external-channels-digital-marketing-outline-outline-black-m-oki-orlando"
            />
          </NavLink>
          <NavLink className={styles.nav_link} to={""}>
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/ffffff/windows/32/comment-medical.png"
              alt="comment-medical"
            />
          </NavLink>
          <NavLink className={styles.nav_link} to={""}>
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/ffffff/ios-glyphs/24/menu-2.png"
              alt="menu-2"
              onClick={() => setIsOpen(!isOpen)}
            />
          </NavLink>
          {isOpen && (
            <div>
              {options.map((option) => (
                <button
                  className={styles.signOut}
                  key={option}
                  onClick={logout}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className={styles.dropdown}>
          <NavLink className={styles.nav_link} to={""}>
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/ffffff/ios-glyphs/24/menu-2.png"
              alt="menu-2"
              onClick={() => setIsOpen(!isOpen)}
            />
          </NavLink>
          {isOpen && (
            <div>
              {options.map((option) => (
                <button
                  className={styles.signOut}
                  key={option}
                  onClick={logout}
                >
                  {option}
                  <NavLink className={styles.nav_link} to={""}>
                    <img
                      width="24"
                      height="24"
                      src="https://img.icons8.com/ffffff/sf-regular-filled/48/groups.png"
                      alt="groups"
                    />
                  </NavLink>
                  <NavLink className={styles.nav_link} to={""}>
                    <img
                      width="24"
                      height="24"
                      src="https://img.icons8.com/ffffff/external-bearicons-detailed-outline-bearicons/64/external-Stories-social-media-bearicons-detailed-outline-bearicons.png"
                      alt="external-Stories-social-media-bearicons-detailed-outline-bearicons"
                    />
                  </NavLink>
                  <NavLink className={styles.nav_link} to={""}>
                    <img
                      width="24"
                      height="24"
                      src="https://img.icons8.com/ffffff/external-outline-black-m-oki-orlando/24/external-channels-digital-marketing-outline-outline-black-m-oki-orlando.png"
                      alt="external-channels-digital-marketing-outline-outline-black-m-oki-orlando"
                    />
                  </NavLink>
                  <NavLink className={styles.nav_link} to={""}>
                    <img
                      width="24"
                      height="24"
                      src="https://img.icons8.com/ffffff/windows/32/comment-medical.png"
                      alt="comment-medical"
                    />
                  </NavLink>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
