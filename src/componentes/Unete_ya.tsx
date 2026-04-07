import { useState } from "react";
import { RegisterView } from "../views/RegisterView";
import { handleRegister } from "../controllers/registerController";

export function Unete_ya() {
  const [values, setValues] = useState({
    email: "",
    user: "",
    password: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleRegister(values);
  };

  return (
    <RegisterView
      values={values}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
    />
  );
}