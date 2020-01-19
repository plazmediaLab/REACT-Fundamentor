// 1.- Inportamos [React] desde la librería npm [react].
import React from 'react';
// 2.- Inportamos [ReactDOM] desde la librería npm [react].
// Esta librería es la encargada de renderizar los elementos en el DOM.
import ReactDOM from 'react-dom'

// 3.- Creamos nuestro elemento a renderizar
const App = <h1>Hello Worl!!!</h1>;
// Babel será el encargado de compilar el elemento.
// const App = React.createElement("h1", null, "Hello Worl!!!");

// 4.- Accedemos al elemento HTML del DOM en el cual renderizaremos nuetsra app.
// -> ./public/index.html
const root = document.getElementById('root');

// 5.- Mandamos renderizar nuestro elemento a traves del metodo [.render()].
// Este recibe dos parametros principales.
//    1{ Elemento a renderizar } 
//    2{ Elemento real del DOM en donde se rendirazara } 
ReactDOM.render(App, root);