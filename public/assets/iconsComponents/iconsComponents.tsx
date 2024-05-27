//Cada vez que quiera usar un icono svg en los botones, necesitas primero transformar el svg puro a componente de react
//esto se hace para poder aplicarle un color ya que con el componente Image de Next no deja modificarlo
//Se puede usar la herramienta https://transform.tools/ y colocar la opcion SVG to JSX para hacerlo más facil, y agregarle una prop
//Tomar de ejemplo el primer componente SVG que se creo: TrendUp02
//y seguir el formato de carpetas que esta en /public/assets/icons
//para el nombre de componente cambiar - por camelCase ej:icon-lindo-02 = iconLindo02

//Ejemplo a seguir
import TrendUp02 from "./Charts/TrendUp02";
//Ejemplo a seguir
import TrendUp01 from "./Charts/TrendUp01";
import TrendDown01 from "./Charts/TrendDown01";
import TrendDown02 from "./Charts/TrendDown02";
import Copy06 from "./General/Copy06";
import UploadCloud02 from "./General/UploadCloud02";
import CoinsStacked03 from "./Finance/CoinsStacked03";
import ArrowRight from "./Arrows/ArrowRight";
import CheckCircle from "./General/CheckCircle";
import ShieldTick from "./Security/ShieldTick";
import LogoCresiumIcon from "./LogoCresiumIcon";
import Home01 from "./General/Home01";

export {
  TrendUp01,
  TrendUp02,
  TrendDown02,
  TrendDown01,
  Copy06,
  CoinsStacked03,
  ArrowRight,
  UploadCloud02,
  CheckCircle,
  ShieldTick,
  LogoCresiumIcon,
  Home01,
};
