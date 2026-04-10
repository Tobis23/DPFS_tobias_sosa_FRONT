import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/api/login_Miembros`;

export const loginUser = async (user: string, password: string) => {
  try {
    const response = await axios.post(API_URL, { user, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};