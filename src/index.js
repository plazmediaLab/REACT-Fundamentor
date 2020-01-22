import React from "react";
import ReactDOM from "react-dom";

/*=================================================================================
*	 Importación de nuestro componente [App]  */
import Main from './Main.js'

/*=================================================================================
 *	  Elemento físico en el DOM  */
const root = document.getElementById("root");

/*=================================================================================
 *	 Metodo llamado para renderizar el elemento en el DOM */
ReactDOM.render(<Main />, root);