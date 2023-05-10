import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  // Check if cart item is already added
  const itemExist = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id,
  );

  // If cart item exists, add increment quantity by 1
  if (itemExist) {
    return cartItems.map((cartItem) => {
      return cartItem.id === productToAdd.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          }
        : cartItem;
    });
  }
  // create a quantity
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  setCartItems: () => {},
  addItemToCart: () => {},
  cartCount: 0,
  setCartCount: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const count = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0,
    );

    setCartCount(count);
  }, [cartItems]);

  const addItemToCart = (product) => {
    // console.log(product);
    setCartItems(addCartItem(cartItems, product));
    setCartCount(cartCount + 1);
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
