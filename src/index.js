import React from "react";
import ReactDOM from "react-dom";

// [PROPS] -> Se puede tomar las props como tubos por los que alimentarmos a nuestros componentes.


// Elemento físico en el DOM.
const root = document.getElementById("root");
//Valor para un template String
let name = 'Evan Alain';

// 1.- Se recibirán los PROPS a nuestro componente a traves de un paramero.
const FruitCard = (props) => (
  <div>
    <h3>Titulo: { props.name }</h3>
    <p>Descripción...</p>
    <p>Precio: ${props.price}</p>
    <hr />
  </div>
);

// 2.- Los PROPS llegan al componente a traves de propiedades, recibiendo el valor.
// --- Para valores de tipo [string], son requeridas las comillas simples o dobles, quedando opcionales las llaves.
// --- Para valores de tipo [num], es requerido las llaves para introducir el valor.
// --- Para los Template String, son requeridas las llaves.
const App = () => (
  <div>
    <FruitCard name='Manzana' price={3.50}></FruitCard>
    <FruitCard name="Fresa" price={2.99}></FruitCard>
    <FruitCard name={'Mango'} price={5.99}></FruitCard>
    <FruitCard name={`Mi nombre es ${ name }`} price={999.99}></FruitCard>
  </div>
);


ReactDOM.render(<App />, root);
