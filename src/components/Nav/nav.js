import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/shared/logo.svg";
import styles from "./nav.module.css";
function Nav() {
  return (
    <div className={styles.Nav}>
      <div className={styles.container}>
        <NavLink className={styles.logo} to="/">
          <img src={logo} alt="" />
        </NavLink>
        <div className={styles.seprator}></div>
        <div className={styles.components}>
          <NavLink className={styles.navLink} to="/">
            <span className={styles.number}>00 </span>HOME
          </NavLink>
          <NavLink className={styles.navLink} to="/Destination">
            <span className={styles.number}>01 </span>DESTINATION
          </NavLink>
          <NavLink className={styles.navLink} to="/Crew">
            <span className={styles.number}>02 </span>CREW
          </NavLink>
          <NavLink className={styles.navLink} to="/Technology">
            <span className={styles.number}>03 </span>TECHNOLOGY
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Nav;
