import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import styles from "./Cart.module.css";
import { Link } from "react-router-dom";
import { useCart } from "../../Context/CartContext";

const CartWidget = () => {
  const { totalItems } = useCart();
  return (
    <Link to="/cartcontainer">
      <div className={styles.div}>
        <span className={styles.span}>{totalItems}</span>
        <FontAwesomeIcon icon={faCartShopping} className={styles.img} />
      </div>
    </Link>
  );
};

export default CartWidget;
