import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react"; // Renders to nothing when it's mounted on the DOM.
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown";
import { CartContext } from "../../context/cart-dropdown.context";

import {
  NavigationContainer,
  LogoContainer,
  NavLink,
  NavLinksContainer,
} from "./navigation.style";

const Navigation = () => {
  // Telling react rerun the functional component again because this value has changed.
  // It rerenders because setCurrentUser is called in UserProvider.
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropDown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
