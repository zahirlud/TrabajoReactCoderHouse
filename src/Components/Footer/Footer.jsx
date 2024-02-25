import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <h3>Contactanos</h3>
          <p>Email: ventaonline@electroshop.com</p>
          <p>Teléfono: +54 911 123 4584</p>
          <p>Dirección: Av. Alberdi 575</p>
        </div>
        <div className={styles.footerContent}>
          <h3>Enlaces</h3>
          <ul className={styles.list}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="">Sobre Nosotros</a>
            </li>

            <li>
              <a href="/products">Productos</a>
            </li>
            <li>
              <a href="">Contacto</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerContent}>
          <h3>Siguenos</h3>
          <ul className={styles.socialIcons}>
            <li>
              <a href="https://www.facebook.com/" target="__blank">
                <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="__blank">
                <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/" target="__blank">
                <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/" target="__blank">
                <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <p>&copy; 2024 Electroshop. Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
