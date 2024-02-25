import styles from "./CartContauner.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const CartContainer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div>
          <FontAwesomeIcon icon={faCircleExclamation} />
        </div>
        <div>Tu Carrito Está Vacío</div>
        <p>
          Si quieres hacer una compra online, selecciona el producto que te
          interesa y haz clic en el botón Añadir al carrito.{" "}
          <Link to="/products" style={{ color: "aliceblue" }}>
            ¡Haz tu compra ahora!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CartContainer;
