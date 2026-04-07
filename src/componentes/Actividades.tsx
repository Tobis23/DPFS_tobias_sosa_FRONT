import { useEffect, useState } from "react";
import { fetchActividades } from "../controllers/actividadController";
import { ActividadesView } from "../views/ActividadesView";

export function Actividades() {
  const [Actividades, setActividades] = useState(null);

  useEffect(() => {
    fetchActividades(setActividades);
  }, []);

  return <ActividadesView Actividades={Actividades} />;
}