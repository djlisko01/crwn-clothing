import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  CartDropDownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.style.jsx";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { CartContext } from "../../context/cart-dropdown.context";
import { useNavigate } from "react-router-dom";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToNavigationHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => {
            return <CartItem key={cartItem.id} cartItem={cartItem} />;
          })
        ) : (
          <EmptyMessage> Cart is Empty</EmptyMessage>
        )}
      </CartItems>

      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={goToNavigationHandler}
      >
        Go to Checkout
      </Button>
    </CartDropDownContainer>
  );
};

export default CartDropDown;
