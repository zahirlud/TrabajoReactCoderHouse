import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext(null);

const CartContextProvider = React.memo(({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addItem = (item, quantity) => {
    const cartCopy = [...cart];
    const index = cartCopy.findIndex((product) => product.id === item.id);
    console.log(index);

    if (index != -1) {
      cartCopy[index].quantity = cartCopy[index].quantity + quantity;
      cartCopy[index].subtotal =
        cartCopy[index].price * cartCopy[index].quantity;
      setCart([...cart]);
    } else {
      const newItem = { ...item, quantity, subtotal: item.price * quantity };
      setCart([...cart, newItem]);
    }
  };

  const removeItem = (id) => {
    const itemRemoved = cart.filter((product) => product.id !== id);
    setCart(itemRemoved);
  };

  const cleanCart = () => {
    setCart([]);
  };

  const handleTotalItems = () => {
    const newTotalItems = cart.reduce((acum, item) => acum + item.quantity, 0);
    setTotalItems(newTotalItems);
  };

  useEffect(() => {
    handleTotalItems(), [cart];
  });

  const handleTotalPrice = () => {
    const newTotalPrice = cart.reduce((acum, item) => acum + item.subtotal, 0);
    setTotalPrice(newTotalPrice);
  };

  useEffect(() => {
    handleTotalPrice(), [cart];
  });

  const objectsValue = {
    cart,
    totalItems,
    totalPrice,
    removeItem,
    cleanCart,
    addItem,
  };

  return (
    <CartContext.Provider value={objectsValue}>{children}</CartContext.Provider>
  );
});

export { CartContextProvider };

export const useCart = () => {
  return useContext(CartContext);
};
