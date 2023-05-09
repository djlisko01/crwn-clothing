import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-in-form.style.scss";
import {
  signInWithGooglePopup,
  signAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import { useState } from "react";

const SignInForm = () => {
  const defaultFormFields = {
    email: "",
    password: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    if (email && password) {
      try {
        await signAuthUserWithEmailAndPassword(email, password);
        resetFields();
      } catch (error) {
        switch (error.code) {
          case "auth/wrong-password":
            alert("Password is incorrect");
            break;
          case "auth/user-not-found":
            alert("User not found");
            break;
          default:
            console.log(error.messages);
        }
      }
    }
  };

  const SignInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  return (
    <div className="sign-up-container">
      <h2> Don't have an account?</h2>
      <span> Sign up with you email and password</span>
      <form onSubmit={handleOnSubmit}>
        <FormInput
          label="Email"
          onChange={handleOnChange}
          type="email"
          required
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          onChange={handleOnChange}
          type="password"
          required
          name="password"
          value={password}
        />
        <div className="button-containers">
          <Button type="submit">Sign In</Button>
          <Button type="button" onClick={SignInWithGoogle} buttonType="google">
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
