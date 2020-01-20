import React from "react";
import ReactDOM from "react-dom";

/*=================================================================================
*	  Elemento físico en el DOM  */
const root = document.getElementById('root');

/*=================================================================================
*	 NOTA: La principal diferencia entre componentes construidos a partir de una función y una clase.
*  es que los componentes en clase, se puden modificar y actualizar a ellos mismos
*  ya que poseen un [estado].
* --------------------------------------------------------------------------------*/

/*=================================================================================
*	 ESTADO: representa el momento actual del componente, si el estado canbia el componente tambíen debería hacerlo.
* --------------------------------------------------------------------------------*/

/*=================================================================================
*	 Componentes creados a partir de una clase extendida de [React.Component]
*	 Utilizaremos su parametro [render()], retornando nuestra estructura JSX.
*	 Lor PROPS en este metodo los recibiremos a traves de la palabra reseravada [this].
* --------------------------------------------------------------------------------*/
 
class ProductsGroup extends React.Component{
  /*=================================================================================
  *	 El metodo [constructor] se inicializa en el momento que se crea el componente.
  *	 Dentro de este es donde se establece el estado del componente.
  * --------------------------------------------------------------------------------*/ 
  constructor(){
    super();

    /*=================================================================================
    *	 Propiedades establecidas en el estado del componente.
    * --------------------------------------------------------------------------------*/
    this.state = {
      quantity: 0
    }
  }

  render(){
    return (
      <div>
        <h2>Title:{ this.props.name }</h2>
        <p>Description...</p>
        <p>${ this.props.price }</p>
        <p>Quantity: { this.state.quantity }</p>
        <button 
          onClick={()=>{
              // this.state.quantity ++;
              // this.forceUpdate();
              /*=================================================================================
              *	 No es buena practica utilizar el metodo [this.forceUpdate()], aún que
              *	 esta disponible para su utilización.
              * --------------------------------------------------------------------------------*/

              /*=================================================================================
              *	 [this.setState()] con este metodo podemos actualizar el estado de nuestro componente
              * --------------------------------------------------------------------------------*/
              this.setState({quantity: this.state.quantity + 1})
            }
          }
        >Add</button>
        <hr/>
      </div>
    )
  }
}

/*=================================================================================
*	 Elemento a renderizar en el DOM  */
const App = () => (
  <div>
    <ProductsGroup name={' Mac 21\"'} price={18000.99}></ProductsGroup>
    <ProductsGroup name={' iWatch'} price={6000.99}></ProductsGroup>
    <ProductsGroup name={' iPhone'} price={25000.99}></ProductsGroup>
  </div>
);

/*=================================================================================
*	 Metodo llamado para renderizar el elemento en el DOM */
ReactDOM.render(<App />, root);