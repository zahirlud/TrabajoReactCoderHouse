import { Link } from "react-router-dom";
import styles from "./FilterAside.module.css";
const FilterAside = ({ categories, setCategoryName }) => {
  return (
    <div className={styles.filterconteiner}>
      <span className={styles.spanfilter}>Filtrar</span>
      <div className={styles.divinputs}>
        <ul>
          {categories.map((category) => {
            return (
              <Link
                to={`/categories/${category.id}/products`}
                style={{ textDecoration: "none", color: "inherit" }}
                onClick={() => setCategoryName(category.name)}
              >
                <li key={category.id}>{category.name}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default FilterAside;
