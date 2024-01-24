import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import styles from "./Cart.module.css";

const CartWidget = () => {
  return (
    <div className={styles.div}>
      <span className={styles.span}>0</span>
      <FontAwesomeIcon icon={faCartShopping} className={styles.img} />
    </div>
  );
};

export default CartWidget;
