import { useState } from "react";
import styles from "./ItemCount.module.css";

const ItemCount = ({ onAdd }) => {
  const [count, setCount] = useState(1);

  return (
    <div className={styles.divbutton}>
      <button
        className={styles.boton1}
        onClick={() => {
          onAdd(count);
        }}
      >
        AGREGAR
      </button>
      <div>
        <button
          className={styles.boton2}
          onClick={() => {
            if (count != 0) {
              setCount(count - 1);
            }
          }}
          disabled={count === 0}
        >
          -
        </button>
        <div>{count}</div>
        <button
          className={styles.boton3}
          onClick={() => {
            setCount(count + 1);
          }}
          disabled={count === 4}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
