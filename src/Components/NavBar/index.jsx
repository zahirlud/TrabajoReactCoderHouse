import styles from "./navbar.module.css";
import CartWidget from "../CartWidget/Cart";
import SearchBar from "../SearchBar/SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlug } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div id="div1" className={styles.div1}>
        <div id="div2" className={styles.div2}>
          <Link to="/">
            <FontAwesomeIcon icon={faPlug} className={styles.img} />{" "}
          </Link>

          <Link to="/products" className={styles.linkp}>
            Productos
          </Link>
        </div>
        <div>
          <SearchBar />
        </div>
        <div id="div3" className={styles.div3}>
          <CartWidget />
        </div>
      </div>
    </>
  );
};
export { NavBar };
