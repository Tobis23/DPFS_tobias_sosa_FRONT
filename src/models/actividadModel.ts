import axios from "axios";

const API_URL = "http://localhost:80/api/actividades";

export const getActividades = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw error;
  }
};