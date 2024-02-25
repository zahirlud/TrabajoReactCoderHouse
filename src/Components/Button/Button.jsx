import styles from "./Button.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Button = () => {
  return (
    <button className={styles.but}>
      <FontAwesomeIcon icon={faCartShopping} />
    </button>
  );
};

export default Button;
