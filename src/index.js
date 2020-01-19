import React from "react";
import ReactDOM from "react-dom";

// Elemento físico en el DOM.
const root = document.getElementById("root");

let titulo = 'Docena de manzanas'

// 1.- Estructura de nuestro componente alojado en un función.
const FruitCard = () => (
  <div>
    <h3>Titulo: { titulo }</h3>
    <hr />
    <p>Descripción...</p>
  </div>
);

// 2.- Componente [App] que renderizaremos en el DOM
// Llamremos a nuestro componente tomandolo como una etiqueta HTML
const App = () => (
  <div>
    <FruitCard></FruitCard>
  </div>
);

// 3.- Para poder mandar nuestro componente al DOM
// Lo tenemos que llamar como parametro, de manera a una etiqueta.
ReactDOM.render(<App />, root);
