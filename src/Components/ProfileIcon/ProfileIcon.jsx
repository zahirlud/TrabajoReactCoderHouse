import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import styles from "./proficon.module.css";

const ProfileIcon = () => {
  return (
    <>
      <span className={styles.spanProfile}>
        <FontAwesomeIcon icon={faUser} className={styles.iconUser} />
        Mi Perfil
      </span>
    </>
  );
};

export default ProfileIcon;
