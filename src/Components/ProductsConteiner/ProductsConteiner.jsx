import { useEffect, useState } from "react";
import styles from "./products.module.css";
import ProductCard from "../ProductCard/ProductCard";
import { getProducts } from "../../Services/Products";
import SlideBar from "../SlideBar/SlideBar";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/firebase";
import { seedProducts } from "../../utils/seedProducts";
import FilterAside from "../FilterAside/FilterAside";

const ProductsConteiner = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState(null);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);
  const { categoryId } = useParams();

  const getProductsDB = () => {
    //referencia a la coleccion de nuestras bases de datos

    const myProducts = collection(db, "products");
    //Obtener los documentos de la base de datos
    getDocs(myProducts).then((res) => {
      // const item = {
      //   id: res.docs[0].id,...res.docs[0].data()
      // }

      //Ordena los productos
      const productList = res.docs.map((doc) => {
        const item = {
          id: doc.id,
          ...doc.data(),
        };
        return item;
      });

      console.log(productList);

      const categoriesList = Array.from(
        new Set(productList.map((product) => product.category))
      );

      console.log(categoriesList);
      //Guardamos los productos
      setProducts(productList);
      setCategories(categoriesList);
      setLoading(false);
    });
  };

  const getFilterProductsDB = (categoryName) => {
    //referencia a la coleccion de nuestras bases de datos

    const myProducts = query(
      collection(db, "products"),
      where("category", "==", categoryName)
    );

    //Obtener los documentos de la base de datos
    getDocs(myProducts).then((res) => {
      // const item = {
      //   id: res.docs[0].id,...res.docs[0].data()
      // }

      //Ordena los productos
      const productList = res.docs.map((doc) => {
        const item = {
          id: doc.id,
          ...doc.data(),
        };
        return item;
      });

      console.log(productList);

      //Guardamos los productos
      setProducts(productList);
      setLoading(false);
    });
  };

  useEffect(() => {
    setLoading(true);
    if (categoryName) {
      getFilterProductsDB(categoryName);
    } else {
      getProductsDB();
    }
  }, [categoryName]);

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
          <p className={styles.pProduct}>
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
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsConteiner;
