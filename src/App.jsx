import "./App.css";
import { NavBar } from "./Components/NavBar";
import ItemListConteiner from "./Components/ItemListConteiner/ItemListConteiner";

function App() {
  let text = "Bienvenido a ElectroShop";
  return (
    <>
      <NavBar />
      <ItemListConteiner children={text} />
    </>
  );
}

export default App;
