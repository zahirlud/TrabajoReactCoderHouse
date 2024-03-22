import styles from "./ProductView.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast, faShop } from "@fortawesome/free-solid-svg-icons";
import ItemCount from "../ItemCount/ItemCount";
import { useCart } from "../../Context/CartContext";
import Swal from "sweetalert2";

const ProductView = ({ id, name, price, description, img }) => {
  const { addItem } = useCart();
  const onAdd = (quantity) => {
    const item = {
      id,
      name,
      price,
      img,
    };
    addItem(item, quantity);
    Swal.fire({
      icon: "success",
      title:
        quantity > 1
          ? `Se agregaron ${quantity} productos al carrito`
          : `Se agregó ${quantity} producto al carrito`,
    });
  };

  return (
    <div className={styles.cardContainer} key={id}>
      <div className={styles.divimg}>
        <img src={img} alt={name} className={styles.img} />
      </div>
      <div className={styles.divdescription}>
        <h3>{name}</h3>
        <p>Descripción: {description}</p>
        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <strike style={{ fontSize: "20px" }}>
              ${price * 0.07 + price}
            </strike>
            <div className={styles.divoff}>7% off</div>
          </div>
          <strong style={{ fontSize: "40px" }}>${price}</strong>
        </div>
        <ItemCount onAdd={onAdd} />

        <div className={styles.divenvio}>
          <p>
            <FontAwesomeIcon icon={faTruckFast} /> Envío a Resistencia (3500):
            $6599
          </p>
          <p>
            <FontAwesomeIcon icon={faShop} /> Retiro GRATIS en sucursal
            ¡Retiralo YA!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
