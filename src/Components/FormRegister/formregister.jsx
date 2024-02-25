import styles from "./Formregister.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faLock,
  faCalendarDays,
  faIdCard,
  faPhone,
  faHouse,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const FormRegister = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    data.preventDefault();
    console.log("Registrado");
    console.log(data);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.box}>
          <h2>Formulario</h2>
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
              {...register("password")}
              type="password"
              name="password"
              id="password"
              placeholder="Contraseña"
              required
            />
            <FontAwesomeIcon icon={faLock} className={styles.icon2} />
          </div>
          <div className={styles.divinput2}>
            <input
              {...register("date")}
              type="date"
              name="date"
              id="date"
              placeholder="Fecha de nacimmiento"
              required
            />
            <FontAwesomeIcon icon={faCalendarDays} className={styles.icon2} />
          </div>
          <div className={styles.divinput2}>
            <input
              {...register("DNI")}
              type="number"
              name="DNI"
              id="DNI"
              placeholder="DNI"
              required
            />
            <FontAwesomeIcon icon={faIdCard} className={styles.icon2} />
          </div>
          <div className={styles.divinput2}>
            <input
              {...register("phone")}
              type="tel"
              name="Teléfono"
              id="Teléfono"
              placeholder="Teléfono"
              required
            />
            <FontAwesomeIcon icon={faPhone} className={styles.icon2} />
          </div>
          <div className={styles.divinput2}>
            <input
              {...register("address")}
              type="text"
              name="address"
              id="address"
              placeholder="Dirección"
              required
            />
            <FontAwesomeIcon icon={faHouse} className={styles.icon2} />
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
          <button type="submit">Registrarse</button>
          <br />
          <br />
          <hr />
          <br />
          <div style={{ textAlign: "center" }}>
            <span>¿Ya estás registrado?</span>{" "}
            <Link to="/login" className={styles.registroLink}>
              Iniciar Sesión
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormRegister;
