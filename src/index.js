import React from "react";
import ReactDOM from "react-dom";

/*=================================================================================
 *	  Elemento físico en el DOM  */
const root = document.getElementById("root");

class ProductsGroup extends React.Component {

  /*=================================================================================
  *	 Otra manera de actuar ante el metodo [bind()], es presidir de el, por lo que 
  *  aremos nuestras funciones en funciones arrow, eliminando igualmente el metodo
  *  [constructor()] y dejando por fuera el [state]  */
  state = {
    quantity: 0
  };

  /*=================================================================================
  *	 Modificadas a Arrow funtions  */
  addQuantity = () => this.setState({
    quantity: this.state.quantity + 1
  });
  subtractQuantity = () => this.setState({
    quantity: this.state.quantity - 1
  });
  cleanQuantity = () => this.setState({
    quantity: 0
  });

  
  /*=================================================================================
  *	 Metodo que renderizara la estructura del componente  */
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
