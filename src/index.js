import React from "react";
import ReactDOM from "react-dom";

/*=================================================================================
*	 Importación de nuestro componente [App]  */
import App from './app.js'

/*=================================================================================
 *	  Elemento físico en el DOM  */
const root = document.getElementById("root");

/*=================================================================================
 *	 Metodo llamado para renderizar el elemento en el DOM */
ReactDOM.render(<App />, root);


/*
* =================================================================================
*
*	 JSX !== HTML
*
* --------------------------------------------------------------------------------
*/
/*=================================================================================
*	 JSX es una extención de XML, por lo tamto es estricto en su forma de declarar.
*  Siempre se tienen que cerrar las etiquetas, ya sea con etiqueta doble de cierre
*  o cierre en etiqueta unica.
*
*     1.- <etiqueta></etiqueta>
*     2.- <etiqueta />
* --------------------------------------------------------------------------------*/
/*=================================================================================
*	 JSX es azúcar sintáctico, término para referirse a los añadidos a la sintaxis de 
*  un lenguaje de programación diseñados para hacer algunas construcciones más 
*  fáciles de leer o expresar.
* --------------------------------------------------------------------------------*/
/*=================================================================================
*	 Los navegadores no comprenden este lenguaje, para resolver esto react utiliza 
*  Babel para compilar todo el el código
* --------------------------------------------------------------------------------*/