//Cada vez que quiera usar un icono svg en los botones, necesitas primero transformar el svg puro a componente de react
//esto se hace para poder aplicarle un color ya que con el componente Image de Next no deja modificarlo
//Se puede usar la herramienta https://transform.tools/ y colocar la opcion SVG to JSX para hacerlo más facil, y agregarle una prop 
//Tomar de ejemplo el primer componente SVG que se creo: TrendUp02
//y seguir el formato de carpetas que esta en /public/assets/icons
//para el nombre de componente cambiar - por camelCase ej:icon-lindo-02 = iconLindo02

//Ejemplo a seguir
import TrendUp02 from "../../public/assets/iconsComponents/Charts/TrendUp02";
//Ejemplo a seguir

import TrendDown02 from "../../public/assets/iconsComponents/Charts/TrendDown02"

export {TrendUp02, TrendDown02}