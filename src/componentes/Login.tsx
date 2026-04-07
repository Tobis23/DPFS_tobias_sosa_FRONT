import { useState } from "react";
import { LoginView } from "../views/LoginView";
import { handleLogin } from "../controllers/loginController";

export function Login({ setUser, closeModal2 }: any) {

  const [values, setValues] = useState({
    user: "",
    password: "",
  });

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    handleLogin(values, setUser, closeModal2);
  };

  return (
    <LoginView
      values={values}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
    />
  );
}