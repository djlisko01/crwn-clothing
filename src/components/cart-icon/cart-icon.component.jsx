import {
  ShoppingIcon,
  CartIconContainer,
  ItemCount,
} from "./cart-icon.style.jsx";
import { useContext } from "react";
import { CartContext } from "../../context/cart-dropdown.context";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount className="item-count"> {cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
