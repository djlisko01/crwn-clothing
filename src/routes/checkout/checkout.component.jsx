import { useContext } from "react";
import { CartContext } from "../../context/cart-dropdown.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} checkoutItem={cartItem} />;
      })}
    </div>
  );
};

export default Checkout;
