import styles from "./AsideCart.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export const AsideCart = ({ handleClick }) => {
  const { cleanCart, totalPrice } = useCart();

  const handleDeleteCart = () => {
    Swal.fire({
      icon: "question",
      title: `¿Deseas vaciar tu carrito?`,
      showCancelButton: true,
      showConfirmButton: true,
    }).then((res) => {
      if (res.isConfirmed) {
        cleanCart();
        Swal.fire({
          icon: "success",
          title: "Carrito vacío",
        });
      }
    });
  };

  return (
    <>
      <div className={styles.div1}>
        <h3>RESUMEN DE COMPRA</h3>
        <hr />
        <div className={styles.div2}>
          <strong>TOTAL:</strong>
          <span>${totalPrice}</span>
        </div>
        <button className={styles.button1} onClick={handleDeleteCart}>
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
        <Link
          to="/cartcontainer/checkout"
          style={{
            textDecoration: "none",
            color: "rgba(255, 255, 255, 0.842)",
          }}
        >
          <button className={styles.button2} onClick={handleClick}>
            Comprar
          </button>
        </Link>
      </div>
    </>
  );
};
