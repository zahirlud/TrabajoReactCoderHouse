import styles from "./Formlogin.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";

const Formlogin = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    data.preventDefault();
    console.log("Logueado");
    console.log(data);
  };
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.box}>
          <h2>Login</h2>
          <div className={styles.divinput1}>
            <input
              {...register("email")}
              type="email"
              name="email"
              id="email"
              placeholder="Email"
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
          <div className={styles.divcheck}>
            <label>
              <input type="checkbox" /> Recuerdame
            </label>
          </div>
          <button type="submit">Login</button>
          <div className={styles.divp}>
            <p>
              ¿No estás registrado?{" "}
              <Link to="/login/register" className={styles.registroLink}>
                <span>Registrate</span>
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Formlogin;
