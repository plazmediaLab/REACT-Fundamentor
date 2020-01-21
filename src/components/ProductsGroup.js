/*=================================================================================
*	 Todo componente independiente requiere inportar [REACT]  */
import React from 'react';

/*=================================================================================
*	 Importación de archivo CSS  */
import './ProductsGroup.css';

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
    *	 Podemos separar las clases CSS en archivos independientes para cada componente
    *  como en cualquier proyecto web, con la diferencia de que en react tenemos que 
    *  importar este documento CSS en cado de estar dentro de nuestro proyecto, para 
    *  así ser compilado por webpack.
    * --------------------------------------------------------------------------------*/
    /*=================================================================================
    *	 Una ves tenemos acceso a este archivo, lo podemos agregar a la estructura de 
    *  nuestro componente, pero no podemos utilizar la palabra reserbada [class], como
    *  lo hariamos en HTML, por lo tanto tenemos que hacerlo a tra ves de la palabra
    *  reservada [className].
    * --------------------------------------------------------------------------------*/
    /*=================================================================================
    *	 Igualmente se puede implementar logíca intermedia en para el manejo de estas clases  */
    // const dinamicClassCss = this.state.quantity > 0 ? 'ProductsGroupActive' : 'ProductsGroup';
    
    /*=================================================================================
    *	 Un metodo para agregar mas de una clase utilizando logíca, es utilizar template string  */
    const hasQuantity = this.state.quantity > 0
    const dinamicClassCss = `ProductsGroup ${hasQuantity ? 'ProductsGroup-active' : ''}`;

    return (
      /*=================================================================================
      *	 Palabra reservada [className]  */
      <div className={dinamicClassCss}>
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