import styles from "./ItemListConteiner.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ItemListConteiner = ({ children }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className={styles.div1}>
        <>{children}</>
        <div className={styles.scroll} onClick={scrollToTop}>
          <FontAwesomeIcon icon={faArrowUp} />
        </div>
      </div>
    </>
  );
};

export default ItemListConteiner;
