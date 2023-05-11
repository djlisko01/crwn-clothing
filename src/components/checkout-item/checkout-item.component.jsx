import { useContext } from "react";
import { CartContext } from "../../context/cart-dropdown.context";
const CheckoutItem = ({ checkoutItem }) => {
  const { imageUrl, name, price, quantity } = checkoutItem;

  const { addItemToCart, decreaseItemInCart } = useContext(CartContext);

  const handleIncrement = () => {
    addItemToCart(checkoutItem);
  };

  const handleOnDecrement = () => {
    decreaseItemInCart(checkoutItem);
  };

  return (
    <div className="checkout-item-container">
      <img src={imageUrl} alt={name} />
      <h2 className="description">{name}</h2>
      <span>{quantity}</span>
      <br />
      <span onClick={handleOnDecrement}>decrement</span>

      <br />
      <span onClick={handleIncrement}>increment</span>

      <div className="price">{price}</div>
    </div>
  );
};

export default CheckoutItem;
