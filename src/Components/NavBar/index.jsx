import React from "react";
import styles from "./navbar.module.css";
import CartWidget from "../CartWidget/Cart";
import SelectProduct from "../SelectProduct/SelectProduct";
import ProfileIcon from "../ProfileIcon/ProfileIcon";
import SearchBar from "../SearchBar/SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlug } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <>
      <div id="div1" className={styles.div1}>
        <div id="div2" className={styles.div2}>
          <FontAwesomeIcon icon={faPlug} className={styles.img} />
          <SelectProduct />
        </div>
        <div>
          <SearchBar />
        </div>
        <div id="div3" className={styles.div3}>
          <ProfileIcon />
          <CartWidget />
        </div>
      </div>
    </>
  );
};
export { NavBar };
