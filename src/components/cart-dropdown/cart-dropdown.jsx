import Button from "../button/button.component";
import "./cart-dropdown.style.scss";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { CartContext } from "../../context/cart-dropdown.context";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((cartItem) => {
          return <CartItem key={cartItem.id} cartItem={cartItem} />;
        })}
      </div>
      <Button>Go to Checkout</Button>
    </div>
  );
};

export default CartDropDown;
