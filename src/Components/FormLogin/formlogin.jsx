import styles from "./Formlogin.module.css";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPhone,
  faEnvelope,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { db } from "../../config/firebase";

import { useForm } from "react-hook-form";
import { useCart } from "../../Context/CartContext";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Formlogin = ({ handleClickFalse }) => {
  const { register, handleSubmit } = useForm();
  const { cart, totalPrice, cleanCart } = useCart();

  const onSubmit = async (register) => {
    const newOrder = {
      buyer: register,
      items: cart,
      totalPrice,
      date: serverTimestamp(),
    };

    const order = await addDoc(collection(db, "orders"), newOrder);

    Swal.fire({
      icon: "success",
      title: `¡Compra exitosa!, te brindamos tu N° de compra: ${order.id}`,
    });
    cleanCart();
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.box}>
          <section className={styles.exitIcon}>
            <Link
              to="/cartcontainer"
              style={{
                textDecoration: "none",
                color: "rgba(255, 255, 255, 0.842)",
              }}
            >
              <FontAwesomeIcon
                icon={faCircleXmark}
                className={styles.exitFont}
                onClick={handleClickFalse}
              />
            </Link>
          </section>
          <h5>Para finalizar la compra rellena los siguientes datos</h5>
          <div className={styles.divinput1}>
            <input
              {...register("name")}
              type="text"
              name="name"
              id="name"
              placeholder="Nombre Completo"
              required
            />
            <FontAwesomeIcon icon={faUser} className={styles.icon1} />
          </div>
          <div className={styles.divinput2}>
            <input
              {...register("phone")}
              type="number"
              name="phone"
              id="phone"
              placeholder="Teléfono"
              required
            />
            <FontAwesomeIcon icon={faPhone} className={styles.icon2} />
          </div>
          <div className={styles.divinput2}>
            <input
              {...register("email")}
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon2} />
          </div>

          <button type="submit">Finalizar compra</button>
        </div>
      </form>
    </div>
  );
};

export default Formlogin;
