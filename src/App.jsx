import "./App.css";
import { NavBar } from "./Components/NavBar";
import ItemListConteiner from "./Components/ItemListConteiner/ItemListConteiner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/home";
import ProductsConteiner from "./Components/ProductsConteiner/ProductsConteiner";
import ProductViewContainer from "./Components/ProductViewContainer/ProductViewContainer";
import Footer from "./Components/Footer/Footer";
import CartContainer from "./Components/CartContainer/CartContainer";
import Error404 from "./Components/Error404/Error404";
import { CartContextProvider } from "./Context/CartContext";
import Formlogin from "./Components/FormLogin/formlogin";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <ItemListConteiner />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsConteiner />} />
          <Route
            path="/products/:productId"
            element={<ProductViewContainer />}
          />
          <Route path="/login" element={<Formlogin />} />
          <Route
            path="/categories/:categoryId/products"
            element={<ProductsConteiner />}
          />
          <Route path="/cartcontainer" element={<CartContainer />} />
          <Route path="/cartcontainer/checkout" element={<CartContainer />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
