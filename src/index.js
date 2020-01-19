import React from "react";
import ReactDOM from "react-dom";

// Variables que serán inyectadas a traves deexpreciones JSX
let name = "Evan Alain";
let user = {
  name: "Adrian",
  age: 29,
  country: "México"
};
function getInfo(data_Arg) {
  return `Hola desde una función, soy ${data_Arg.name}, te doy la bienvenida a ${data_Arg.country}, tengo
  ${data_Arg.age} años.`;
}
// 1.- Primer ejemplo con variable simple
// const App = <h1>Hola a nuestra primera app con React, mi nombre es {name}</h1>;

// 2.- Inyectar parametros desde un objeto.
// const App = (
//   <h2>
//     Hola soy {user.name}, te doy la bienvenida a {user.country}, tengo
//     {user.age} años.
//   </h2>
// );

// 3.- Inyectar parametros desde una función.
const App = <h2>{getInfo(user)}</h2>;
const root = document.getElementById("root");

ReactDOM.render(App, root);
