import { loginUser } from "../models/loginModel";

export const handleLogin = async (
  values: any,
  setUser: any,
  closeModal2: any
) => {
  try {
    await loginUser(values.user, values.password);
    setUser(values.user);
    closeModal2(true);
  } catch (error) {
    alert("Usuario o contraseña incorrecta");
  }
};