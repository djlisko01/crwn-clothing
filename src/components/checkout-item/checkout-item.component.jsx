import { useContext } from "react";
import { CartContext } from "../../context/cart-dropdown.context";
import "./checkout-item.style.scss";
const CheckoutItem = ({ checkoutItem }) => {
  const { imageUrl, name, price, quantity } = checkoutItem;

  const { addItemToCart, decreaseItemInCart, deleteItemInCart } =
    useContext(CartContext);

  const handleIncrement = () => {
    addItemToCart(checkoutItem);
  };

  const handleOnDecrement = () => {
    decreaseItemInCart(checkoutItem);
  };

  const handleOnDelete = () => {
    deleteItemInCart(checkoutItem);
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>

      <div className="quantity">
        <span className="arrow" onClick={handleOnDecrement}>
          &#10094;
        </span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={handleIncrement}>
          &#10095;
        </span>
      </div>
      <div className="price">{price}</div>
      <div className="remove-button" onClick={handleOnDelete}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
