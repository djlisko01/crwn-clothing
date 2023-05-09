import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import "./sign-up.style.scss";
import Button from "../button/button.component";

import {
  createUserDocFromAuth,
  createAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

const SignUpForm = () => {
  const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password,
      );
      await createUserDocFromAuth(user, {
        displayName: displayName,
      });

      resetFields();
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        alert("Email already in use");
      }
      console.log(err.message);
    }
  };

  return (
    <div className="sign-up-container">
      <h2> Don't have an account?</h2>
      <span> Sign up with you email and password</span>
      <form onSubmit={handleOnSubmit}>
        <FormInput
          label="Display Name"
          onChange={handleOnChange}
          type="text"
          required
          name="displayName"
          value={displayName}
        />
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
        <FormInput
          label="Confirm Password"
          onChange={handleOnChange}
          type="password"
          required
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
