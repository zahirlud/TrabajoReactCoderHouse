import { useState } from "react";
import styles from "./homecard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointLeft } from "@fortawesome/free-solid-svg-icons";
const HomeCard = () => {
  const [selectedInput, setSelectedInput] = useState("c4");

  const handleInputChange = (id) => {
    setSelectedInput(id);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <input
            type="radio"
            name="slide"
            id="c1"
            checked={selectedInput === "c1"}
            onChange={() => handleInputChange("c1")}
          />

          <label htmlFor="c1" className={styles.card}>
            <div className={styles.row}>
              <div className={styles.icon}>1</div>
            </div>
          </label>
          <input
            type="radio"
            name="slide"
            id="c2"
            checked={selectedInput === "c2"}
            onChange={() => handleInputChange("c2")}
          />

          <label htmlFor="c2" className={styles.card}>
            <div className={styles.row}>
              <div className={styles.icon}>2</div>
            </div>
          </label>
          <input
            type="radio"
            name="slide"
            id="c3"
            checked={selectedInput === "c3"}
            onChange={() => handleInputChange("c3")}
          />
          <label htmlFor="c3" className={styles.card}>
            <div className={styles.row}>
              <div className={styles.icon}>3</div>
            </div>
          </label>
          <input
            type="radio"
            name="slide"
            id="c4"
            checked={selectedInput === "c4"}
            onChange={() => handleInputChange("c4")}
          />
          <label htmlFor="c4" className={styles.card}>
            <div className={styles.row}>
              <div className={styles.icon}>4</div>
            </div>
          </label>
        </div>
        <div className={styles.divIcon}>
          <p>¡Echa un vistazo a estos beneficios!</p>
          <FontAwesomeIcon className={styles.hand} icon={faHandPointLeft} />
        </div>
      </div>
    </>
  );
};

export default HomeCard;
