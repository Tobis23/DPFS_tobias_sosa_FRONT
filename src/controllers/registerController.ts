import { registerUser } from "../models/registerModel";

export const handleRegister = async (values: any) => {
  try {
    await registerUser(values.user, values.email, values.password);
    alert("Miembro cargado correctamente");
  } catch (error) {
    alert("Error al registrar");
  }
};