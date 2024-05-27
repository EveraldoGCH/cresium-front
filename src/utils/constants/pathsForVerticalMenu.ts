import {
  Bank,
  HomeLine,
  LifeBuoy01,
  List,
  Settings01,
  SwitchHorizontal02,
  UserCircle
} from "../../../public/assets/iconsComponents/iconsComponents";

export const pathsForVerticalMenu = {
  firstBlock: [
    { path: "/dashboard", icon: HomeLine, name: "Home" },
    { path: "/transactions", icon: List, name: "Transacciones" },
    { path: "/payments", icon: SwitchHorizontal02, name: "Pagos" },
    { path: "/accounts", icon: Bank, name: "Cuentas" },
  ],
  secondBlock: [
    { path: "/account", icon: LifeBuoy01, name: "Soporte" },
    { path: "/account", icon: Settings01, name: "Configuracion" },
    { path: "/account", icon: UserCircle, name: "Cuenta" },
  ],
};
