import styles from "./CategoriesCard.module.css";

const CategoriesCard = ({ id, name, image }) => {
  return (
    <div className={styles.divcard} key={id}>
      <div>
        <img src={image} alt={name} className={styles.cardimg} />
      </div>
      <div>
        <h2 style={{ textAlign: "center", fontSize: "15px" }}>{name}</h2>
      </div>
    </div>
  );
};

export default CategoriesCard;
