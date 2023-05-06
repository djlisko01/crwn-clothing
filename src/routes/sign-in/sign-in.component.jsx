import {
  signInWithGooglePopup,
  createUserDocFromAuth,
  createAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user);
    const userDocRef = await createUserDocFromAuth(user);
  };

  return (
    <div>
      <SignUpForm
        createUserWithEmailAndPassword={createAuthUserWithEmailAndPassword}
        createUserDocFromAuth={createUserDocFromAuth}
      />
      <button onClick={logGoogleUser}>Sign in with Google Pop-up</button>
    </div>
  );
};

export default SignIn;
