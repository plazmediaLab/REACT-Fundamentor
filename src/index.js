import React from "react";
import ReactDOM from "react-dom";

/*=================================================================================
 *	  Elemento físico en el DOM  */
const root = document.getElementById("root");

class ProductsGroup extends React.Component {
  constructor() {
    super();

    /*=================================================================================
     *	 Aún que podemos agregar [onClick={this.addQuantity.bind(this)}] directamente
     *  en el punto del evento dentro de la etiqueta <button> como propiedad.
     *  Es buena practica declarar el [bind] dentro del metodo constructor, de esta
     *  manera servira para todos los metodos aplicados en nuestro componente.  
     *  Aún que por el momento esta declaración esta bien, al aumentar el número
     *  de [bind] utilizados, esto se comvertiria muy complicado de mantener */
    // this.addQuantity = this.addQuantity.bind(this);
    // this.subtractQuantity = this.subtractQuantity.bind(this);
    /*=================================================================================
    *	 Una mejor practica es crear un array con los string de los metodos a procesar
    *  con el metodo [bind()] y aplicar un ciclo [forEach()]  */
    const METHODS = [
      'addQuantity',
      'subtractQuantity',
      'cleanQuantity'
    ];
    METHODS.forEach((method_arg) => {
      this[method_arg] = this[method_arg].bind(this);
    })

    this.state = {
      quantity: 0
    };
  }

  /*=================================================================================
   *  NOTA:
   *	 Para majear de forma mas optima las funciones a realizar tras el evento CLICK
   *	 crearemos la función por fuera del metodo render a diferencia del manejo de
   *	 funciones de flecha, al evitar usar directamente estas funciones, react tendra
   *  procesos mas eficientes
   * --------------------------------------------------------------------------------*/
  addQuantity() {
    this.setState({
      quantity: this.state.quantity + 1
    });
  }
  subtractQuantity() {
    this.setState({
      quantity: this.state.quantity - 1
    });
  }
  cleanQuantity() {
    this.setState({
      quantity: 0
    });
  }

  /*=================================================================================
   *	 NOTA: El metodo [bind()] nos ayuda a canviar el contexto de la palabra reservada
   *  [this] dentro de nuestra función, así react podra procesar esta llamada sobre
   *  la clase y su estado, ya que ahí es en donde esta nuestro dato a modificar
   * --------------------------------------------------------------------------------*/
  render() {
    return (
      <div>
        <h2>Title:{this.props.name}</h2>
        <p>Description...</p>
        <p>${this.props.price}</p>
        <p>Quantity: {this.state.quantity}</p>
        <button onClick={this.addQuantity}> + </button>
        <button onClick={this.subtractQuantity}> - </button>
        <button onClick={this.cleanQuantity}>Clean</button>
        <hr />
      </div>
    );
  }
}

/*=================================================================================
 *	 Elemento a renderizar en el DOM  */
const App = () => (
  <div>
    <ProductsGroup name={' Mac 21"'} price={18000.99}></ProductsGroup>
    <ProductsGroup name={" iWatch"} price={6000.99}></ProductsGroup>
    <ProductsGroup name={" iPhone"} price={25000.99}></ProductsGroup>
  </div>
);

/*=================================================================================
 *	 Metodo llamado para renderizar el elemento en el DOM */
ReactDOM.render(<App />, root);
