import { HeaderView } from "../views/HeaderView";
import { useHeaderController } from "../controllers/headerController";

import { Unete_ya } from "./Unete_ya";
import { Login } from "./Login";
import { Horariosventana } from "./Horariosventana";
import { Actividades } from "./Actividades";
import { Profile } from "../componentes/Profile";

export function Header() {

  const controller = useHeaderController();

  return (
    <HeaderView
      {...controller}
      Actividades={Actividades}
      Horariosventana={Horariosventana}
      Unete_ya={Unete_ya}
      Login={Login}
      Profile={Profile}
    />
  );
}