import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react"; // Renders to nothing when it's mounted on the DOM.
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import "./navigation.style.scss";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown";
import { CartContext } from "../../context/cart-dropdown.context";

const Navigation = () => {
  // Telling react rerun the functional component again because this value has changed.
  // It rerenders because setCurrentUser is called in UserProvider.
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropDown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
