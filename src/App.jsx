import "./App.css";
import { NavBar } from "./Components/NavBar";
import ItemListConteiner from "./Components/ItemListConteiner/ItemListConteiner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/home";
import ProductsConteiner from "./Components/ProductsConteiner/ProductsConteiner";
import Formlogin from "./Components/FormLogin/formlogin";
import ProductViewContainer from "./Components/ProductViewContainer/ProductViewContainer";
import Footer from "./Components/Footer/Footer";
import FormRegister from "./Components/FormRegister/formregister";
import CategoriesConteiner from "./Components/CategoriesContainer/CategoriesContainer";
import CartContainer from "./Components/CartContainer/CartContainer";
import Error404 from "./Components/Error404/Error404";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <ItemListConteiner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsConteiner />} />
        <Route path="/products/:productId" element={<ProductViewContainer />} />
        <Route path="/login" element={<Formlogin />} />
        <Route path="/login/register" element={<FormRegister />} />
        <Route path="/categories" element={<CategoriesConteiner />} />
        <Route
          path="/categories/:categoryId/products"
          element={<CategoriesConteiner />}
        />
        <Route path="/cartcontainer" element={<CartContainer />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
