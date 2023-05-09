import { createContext, useState, useEffect } from "react";
import {
  onAuthChangeListener,
  createUserDocFromAuth,
} from "../utils/firebase/firebase.utils";
// think of this as a storage for USER.

// Actual value you want to store.
// Here you will set up the default value for the context.
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// The is the actual component.
export const UserProvider = ({ children }) => {
  // This is how we initialize the value.
  const [currentUser, setCurrentUser] = useState(null); // This is for the state not the initial context.
  // Value holds the actual contextual value.
  const value = { currentUser, setCurrentUser };
  // The dot provider that will wrap around any other components that need to access to the values inside.

  useEffect(() => {
    const unsubscribe = onAuthChangeListener((user) => {
      if (user) {
        createUserDocFromAuth(user);
      }
      setCurrentUser(user);
      console.log(user);
    });

    return unsubscribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
