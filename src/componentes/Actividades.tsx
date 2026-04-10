import { useEffect, useState } from "react";
import { fetchActividades } from "../controllers/actividadController";
import { ActividadesView } from "../views/ActividadesView";

type Actividad = {
  id: number;
  nombre_actividad: string;
  estado_actividad: number;
};

export function Actividades() {
  const [actividades, setActividades] = useState<Actividad[]>([]);

  useEffect(() => {
    fetchActividades(setActividades);
  }, []);

  return <ActividadesView actividades={actividades} />;
}