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
