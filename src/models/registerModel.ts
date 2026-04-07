import axios from "axios";

const API_URL = "http://localhost:80/api/registro_Miembros";

export const registerUser = async (
  user: string,
  email: string,
  password: string
) => {
  try {
    const response = await axios.post(API_URL, {
      user,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};