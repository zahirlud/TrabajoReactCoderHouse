import ProductView from "../ProductView/ProductView";
import styles from "./PVContainer.module.css";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../config/firebase";

const ProductViewContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);

  const { productId } = useParams();

  const getProductDB = (productId) => {
    const productRef = doc(db, "products", productId);

    getDoc(productRef).then((res) => {
      const product = {
        id: res.id,
        ...res.data(),
      };
      setItem(product);
      setLoading(false);
      console.log(product);
    });
  };

  useEffect(() => {
    setLoading(true);
    getProductDB(productId);
  }, []);

  if (loading) {
    return <div className={styles.load}>Cargando producto...</div>;
  }

  return <div className={styles.container}>{<ProductView {...item} />}</div>;
};

export default ProductViewContainer;
