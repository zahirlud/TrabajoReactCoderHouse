import { useEffect, useState } from "react";
import styles from "./products.module.css";
import ProductCard from "../ProductCard/ProductCard";
import { getProducts } from "../../Services/Products";
import SlideBar from "../SlideBar/SlideBar";
import { Link } from "react-router-dom";

const ProductsConteiner = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getProducts()
      .then((res) => {
        setProducts(res);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        console.error("Error", err);
      });
  }, []);

  if (loading) {
    return <div className={styles.load}>Cargando productos...</div>;
  }

  if (error) {
    return <div className={styles.load}>Error, cargando datos...</div>;
  }

  return (
    <>
      <SlideBar />
      <div className={styles.container}>
        <div className={styles.wrapP}>
          <p className={styles.pProduct}>Todos los Productos</p>
          <span>{products.length} resultado/s</span>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.filterconteiner}>
            <span className={styles.spanfilter}>Filtrar por categorías</span>
            <p>
              <Link to="/categories" className={styles.link}>
                Haz click aquí
              </Link>
            </p>
          </div>
          <div className={styles.card}>
            {products.map((product) => (
              <ProductCard {...product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsConteiner;
