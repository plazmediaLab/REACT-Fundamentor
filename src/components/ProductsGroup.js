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
*	 Y a su vez requiere una exportación explicita  */
export default ProductsGroup