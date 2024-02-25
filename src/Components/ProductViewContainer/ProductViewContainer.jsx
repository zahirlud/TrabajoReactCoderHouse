import { useEffect, useState } from "react";
import ProductView from "../ProductView/ProductView";
import styles from "./PVContainer.module.css";
import { getProductSingle } from "../../Services/Products";
import { useParams } from "react-router-dom";

const ProductViewContainer = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { productId } = useParams();

  useEffect(() => {
    setLoading(true);
    getProductSingle(productId)
      .then((res) => {
        setProducts(res);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        console.error("Error", err);
      });
  }, []);

  return (
    <div className={styles.container}>
      {products ? (
        <ProductView {...products} />
      ) : loading ? (
        <div className={styles.load}>Cargando producto...</div>
      ) : error ? (
        <p>Error al cargar el producto.</p>
      ) : null}
    </div>
  );
};

export default ProductViewContainer;
