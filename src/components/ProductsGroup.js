/*=================================================================================
*	 Todo componente independiente requiere inportar [REACT]  */
import React from 'react';

/*=================================================================================
*	 Importación de modulo CSS  */
import styles from './ProductsGroup.module.css';

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
    *	 A diferencia de las clases habitualos de CSS, en los modulos se manejarán como
    *  parte de un objeto, de modo a su propiedad
    *  EJEMPLO: styles.ProductsGroup
    * --------------------------------------------------------------------------------*/
    /*=================================================================================
    *	 En caso de ser referencias simples o a modo CamelCase, se puede llamar directamente
    *  de utilizar guión medio [-], es necesario la utilización de corchetes a modo de array
    *  EJEMPLO: styles['ProductsGroup-active']
    * --------------------------------------------------------------------------------*/
    const hasQuantity = this.state.quantity > 0;
    const classActive = hasQuantity ? styles['ProductsGroup-active'] : '';
    const dinamicClassCss = styles.ProductsGroup + ' ' + classActive;

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