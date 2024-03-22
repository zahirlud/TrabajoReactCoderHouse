import { Link } from "react-router-dom";
import styles from "./FilterAside.module.css";
const FilterAside = ({ categories, setCategoryName }) => {
  return (
    <div className={styles.filterconteiner}>
      <span className={styles.spanfilter}>Filtrar</span>
      <div className={styles.divinputs}>
        <ul>
          {categories.map((category, index) => (
            <Link
              // Asegúrate de tener una clave única
              key={index}
              to={`/categories/${index}/products`}
              style={{ textDecoration: "none", color: "inherit" }}
              onClick={() => setCategoryName(category)}
            >
              <li>{category}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilterAside;
