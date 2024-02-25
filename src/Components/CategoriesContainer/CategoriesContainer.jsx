import { useEffect, useState } from "react";
import styles from "./CategoriesContainer.module.css";
import ProductCard from "../ProductCard/ProductCard";
import CategoriesCard from "../CategoriesCard/CategoriesCard";
import {
  getCategories,
  getCategoriesByProducts,
} from "../../Services/Categories";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import SlideBar from "../SlideBar/SlideBar";
import FilterAside from "../FilterAside/FilterAside";

const CategoriesConteiner = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadProduct, setLoadProduct] = useState(false);
  const [error, setError] = useState(null);
  const [categoryName, setCategoryName] = useState(null);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    getCategories()
      .then((res) => {
        setCategories(res);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        console.error("Error", err);
      });
  }, []);

  useEffect(() => {
    if (categoryId) {
      setLoadProduct(true);

      getCategoriesByProducts(categoryId)
        .then((res) => {
          setProducts(res);
          setLoadProduct(false);
        })
        .catch((err) => {
          setError(true);
          console.error("Error", err);
        });
    }
  }, [categoryId]);

  console.log(categories);

  if (loading) {
    return <div className={styles.load}>Cargando categorias...</div>;
  }

  if (loadProduct) {
    return <div className={styles.load}>Cargando productos...</div>;
  }

  if (error) {
    return <div className={styles.load}>Error, cargando datos...</div>;
  }

  return (
    <>
      <SlideBar />
      <div className={styles.container}></div>
      <div className={styles.wrapP}>
        <p className={styles.pCategory}>
          Categorías{categoryName ? `/${categoryName}` : ""}
        </p>

        <span>{products.length} resultado/s</span>
      </div>
      <div className={styles.wrapper}>
        <FilterAside
          categories={categories}
          setCategoryName={setCategoryName}
        />

        <div className={styles.card}>
          {!categoryId
            ? categories.map((category) => (
                <Link
                  to={`/categories/${category.id}/products`}
                  style={{ textDecoration: "none", color: "inherit" }}
                  onClick={() => setCategoryName(category.name)}
                >
                  <CategoriesCard {...category} />
                </Link>
              ))
            : products.map((product) => <ProductCard {...product} />)}
        </div>
      </div>
    </>
  );
};

export default CategoriesConteiner;
