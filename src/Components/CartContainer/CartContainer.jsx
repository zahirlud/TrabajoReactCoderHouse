import styles from "./CartContauner.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import CartList from "../CardList/CarList";
import { useCart } from "../../Context/CartContext";
import { AsideCart } from "../AsideCart/AsideCart";
import Formlogin from "../FormLogin/formlogin";
import { useState } from "react";
const CartContainer = () => {
  const { cart } = useCart();
  const [showForm, setShowForm] = useState(false); // Define el estado aquí

  const handleClick = () => {
    setShowForm(true);
  };

  const handleClickFalse = () => {
    setShowForm(false);
  };
  return (
    <>
      {cart.length !== 0 ? (
        <>
          <div className={styles.containerPrincipal}>
            <div className={styles.container1}>
              <div className={styles.wrapper1}>
                <span className={styles.spanProduct}>Producto</span>
                <span>Cantidad</span>
                <span>Precio</span>
                <span>Subtotal</span>
              </div>
              {cart.map((item) => {
                return <CartList key={item.id} {...item} />;
              })}
            </div>
            <AsideCart handleClick={handleClick} />
          </div>
          {showForm && <Formlogin handleClickFalse={handleClickFalse} />}
        </>
      ) : (
        <div className={styles.container2}>
          <div className={styles.wrapper2}>
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
      )}
    </>
  );
};

export default CartContainer;
