import HomeCard from "../HomeCard/HomeCard";
import styles from "./home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className={styles.divh2}>
        <h2 className={styles.h2}>¡Bienvenidos a ElectroShop!</h2>
        <p className={styles.p}>
          No te pierdas de nuestras mejores ofertas, ¡¿Qué estás esperando?!
        </p>
        <div className={styles.divbutton}>
          <Link to="/products">
            <button className={styles.button}>Empezar a comprar</button>
          </Link>
        </div>
      </div>

      <HomeCard />
    </>
  );
};

export default Home;
