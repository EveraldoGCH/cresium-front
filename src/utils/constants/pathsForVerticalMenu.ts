import {
  ArrowDownLeft,
  CoinSwap01,
  CoinsStacked03,
  Copy06,
  HomeLine,
  LifeBuoy01,
  List,
  Settings01,
  TrendUp02,
  UserCircle,
} from "../../../public/assets/iconsComponents/iconsComponents";

export const pathsForVerticalMenu = {
  firstBlock: [
    { path: "/dashboard", icon: HomeLine, name: "Home" },
    { path: "/transactions", icon: List, name: "Movimientos" },
    {
      path: "",
      icon: CoinSwap01,
      name: "Transferencias",
      expand: [
        { path: "/enviar-dinero", icon: TrendUp02, name: "Enviar dinero" },
        {
          path: "/enviar-dinero2",
          icon: ArrowDownLeft,
          name: "Recibir dinero",
        },
        {
          path: "/enviar-dinero3",
          icon: CoinsStacked03,
          name: "Pago en lotes",
        },
      ],
    },
    { path: "/", icon: UserCircle, name: "Prueba mas larga" },

    { path: "/", icon: Copy06, name: "a ver como se comporta" },
    { path: "/", icon: CoinsStacked03, name: "con mas items" },
  ],
  secondBlock: [
    { path: "/account", icon: LifeBuoy01, name: "Soporte" },
    { path: "/account", icon: Settings01, name: "Configuracion" },
    { path: "/account", icon: UserCircle, name: "Cuenta" },
  ],
};
