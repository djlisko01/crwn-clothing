import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  // Check if cart item is already added

  const itemExist = checkIfItemExist(cartItems, productToAdd);

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

const decrementItem = (cartItems, productToDecrement) => {
  const itemExists = checkIfItemExist(cartItems, productToDecrement);

  if (itemExists) {
    // Remove the item decrement results in 0 items remaining
    if (itemExists.quantity === 1) {
      return cartItems.filter(
        (cartItem) => cartItem.id !== productToDecrement.id,
      );
    }
    //  Decrement the item quantity
    return cartItems.map((cartItem) => {
      return cartItem.id === productToDecrement.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem;
    });
  }
};

// Helper functions
const checkIfItemExist = (cartItems, product) => {
  return cartItems.find((cartItem) => cartItem.id === product.id);
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  setCartItems: () => {},
  addItemToCart: () => {},
  decreaseItemInCart: () => {},
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
    setCartItems(addCartItem(cartItems, product));
  };

  const decreaseItemInCart = (product) => {
    console.log(cartItems, product);
    setCartItems(decrementItem(cartItems, product));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    decreaseItemInCart,
    cartItems,
    cartCount,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
