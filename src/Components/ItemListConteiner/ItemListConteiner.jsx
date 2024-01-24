import React from "react";
import styles from "./ItemListConteiner.module.css";

const ItemListConteiner = ({ children }) => {
  return <div className={styles.div1}>{children}</div>;
};

export default ItemListConteiner;
