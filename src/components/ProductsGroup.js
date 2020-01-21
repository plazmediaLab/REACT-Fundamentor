/*=================================================================================
*	 Todo componente independiente requiere inportar [REACT]  */
import React from 'react';

class ProductsGroup extends React.Component {

  state = {
    quantity: 0
  };

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

    /*=================================================================================
    *	 Los estilos dentro de nuestro componente los podemos declarar en línea dentro
    *  de la estructura JSX, pero esto lo volvera poco sostonible a futuro, por lo que
    *  otro metodo es es declararlo en una constante a modo de objeto con las propiedades
    *  y su respectivo valor  */
    /*=================================================================================
    *	 Para esto en el nombre de las propiedades implementaremos CamelCase, ya que 
    *  utilizar guin medio, como es usual en CSS no funcionara  */

    /*=================================================================================
    *	 Igualmente dentro de estas configuraciones podemos implementar lógica de programación
    *  Ya sea directamente, declarada o a modo de constantes y (0) varibles
    *  como en el siguiente caso con una condicional terciaria.  */
    const dinamicData = this.state.quantity > 0;

    const style = {
      padding: '2em',
      border: '1px solid #d0d0d0',
      borderRadius: '1em',
      marginBottom: '1em',
      boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.15)',
      transition: 'all 400ms ease-out',
      background: dinamicData ? 'linear-gradient(0deg, rgb(32,124,229), rgb(73,155,234)': '#fff',
      color: dinamicData ? '#fff' : '#000',
    }

    return (
      <div style={style}>
        <h2>Title:{this.props.name}</h2>
        <p>Description...</p>
        <p>${this.props.price}</p>
        <p>Quantity: {this.state.quantity}</p>
        <button onClick={this.addQuantity}> + </button>
        <button onClick={this.subtractQuantity}> - </button>
        <button onClick={this.cleanQuantity}>Clean</button>
        <p>
          Total:{ this.props.price * this.state.quantity }
        </p>
      </div>
    );
  }
}

/*=================================================================================
*	 Y a su vez requiere una exportación explicita  */
export default ProductsGroup