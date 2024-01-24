import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import styles from "./proficon.module.css";

const ProfileIcon = () => {
  return (
    <>
      <span className={styles.spanProfile}>
        <FontAwesomeIcon icon={faUser} className={styles.iconUser} />
        <a className={styles.aProfile} href="">
          Mi Perfil
        </a>
      </span>
    </>
  );
};

export default ProfileIcon;
