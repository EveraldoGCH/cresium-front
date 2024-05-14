Para crear un nuevo icono que no esta en los componentes:

1-. Cada vez que quiera usar un icono svg en los botones, necesitas primero transformar el svg puro a componente de react
*esto se hace para poder aplicarle un color ya que con el componente Image de Next no deja modificarlo*
Se puede usar la herramienta https://transform.tools/ y colocar la opcion SVG to JSX para hacerlo más facil, y agregarle una prop

Nombre en figma: shield-tick      Nombre de archivo JSX a crear: ShieldThick.jsx

Nombres en CamelCase
//Tomar de ejemplo el primer componente SVG que se creo: TrendUp02
//y seguir el formato de carpetas que trae el icono svg

Ejemplo:
ruta de archivo svg: public/icon/assets/General/icono.svg
Ruta a  crear si carpeta/icono no existe public/assets/iconsComponents/General/icono.JSX


PASO 2:
IR a public\assets\iconsComponents\iconsComponents.tsx

Importarlo y luego exportarlo

EJ:
import TrendUp02 from "./Charts/TrendUp02";


export {
  TrendUp01,
  TrendUp02,//AGREGO EN OBJETO EXPORT EL NUEVO
  TrendDown02,
  TrendDown01,
  Copy06,
  CoinsStacked03,
  ArrowRight,
  UploadCloud02,
  CheckCircle
};
