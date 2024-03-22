import styles from "./CarList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../../Context/CartContext";
import Swal from "sweetalert2";

const CartList = ({ id, price, quantity, subtotal, img, name }) => {
  const { removeItem } = useCart();
  const handleDeleteItem = ({ id }) => {
    Swal.fire({
      icon: "question",
      title: `¿Deseas eliminar a ${name} del carrito?`,
      showCancelButton: true,
      showConfirmButton: true,
    }).then((res) => {
      if (res.isConfirmed) {
        removeItem(id);
        Swal.fire({
          icon: "success",
          title: "Producto eliminado",
        });
      }
    });
  };
  return (
    <>
      <div className={styles.wrapper} key={id}>
        <img src={img} alt={img} />
        <strong className={styles.title}>{name} </strong>
        <span>{quantity}</span>
        <span>${price}</span>
        <span>${subtotal}</span>
        <button onClick={() => handleDeleteItem({ id })}>
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </div>
    </>
  );
};

export default CartList;
