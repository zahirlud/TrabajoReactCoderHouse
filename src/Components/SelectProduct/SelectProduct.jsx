import React from "react";
import styles from "./select.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const SelectProduct = () => {
  return (
    <>
      <div className={styles.divProduct}>
        <FontAwesomeIcon icon={faBars} className={styles.iconProduct} />
        <span id="Productos" className={styles.spanProduct}>
          Productos
        </span>
      </div>
      <div id="dropdowndiv" className={styles.divdrop}>
        <a>Tecnología</a>
        <a>Electrodomésticos</a>
        <a>Cuidado Personal</a>
        <a>Salud</a>
        <a>Hogar</a>
        <a>Jardín</a>
        <a>Herramientas</a>
      </div>
    </>
  );
};

export default SelectProduct;
