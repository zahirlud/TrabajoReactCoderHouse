import styles from "./Search.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  return (
    <div id="input" className={styles.div}>
      <input
        className={styles.input}
        type="search"
        name=""
        id=""
        placeholder="¿Qué estás buscando?"
      />{" "}
      <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.search} />
    </div>
  );
};

export default SearchBar;
