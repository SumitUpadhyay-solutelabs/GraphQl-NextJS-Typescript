import { createContext, useState } from "react";

export const CartContext = createContext();
export default function CartContextProvider({ children }) {
  const [cartData, setCartData] = useState([]);
  const addToCart = (id) => {
    setCartData([...cartData, id]);
  };
  const removeFromCart = (id) => {
    setCartData(cartData.filter((item) => item !== id));
  };
  //console.log(cartData);
  return (
    <CartContext.Provider value={{ cartData, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
