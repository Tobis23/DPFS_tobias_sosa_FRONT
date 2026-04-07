import { getActividades } from "../models/actividadModel";

export const fetchActividades = async (setActividades: any) => {
  try {
    const data = await getActividades();
    setActividades(data);
  } catch (error) {
    alert("Error al obtener actividades");
  }
};