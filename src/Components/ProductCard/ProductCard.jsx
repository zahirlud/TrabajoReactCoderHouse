import styles from "./Card.module.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const ProductCard = ({ id, title, price, images }) => {
  return (
    <div className={styles.divcard} key={id}>
      <div className={styles.divimg}>
        <img src={images[0]} alt={title} className={styles.cardimg} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            minHeight: "125px",
          }}
        >
          <h2 style={{ textAlign: "center", fontSize: "15px" }}>{title}</h2>

          <p style={{ textAlign: "center", fontSize: "12px" }}>
            Descripción:{" "}
            <Link to={`/products/${id}`} style={{ color: "inherit" }}>
              Ver detalles
            </Link>
          </p>
        </div>
      </div>
      <div className={styles.divbottom}>
        <Link to={`/products/${id}`}>
          <Button />
        </Link>
        <div className={styles.divspan}>${price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
