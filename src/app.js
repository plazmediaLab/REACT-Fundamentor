import React from 'react';
import ProductsGroup from './components/ProductsGroup'

/*=================================================================================
 *	 Elemento a renderizar en el DOM  */
const App = () => (
  <div>
    <ProductsGroup name={' Mac 21"'} price={18000.99}></ProductsGroup>
    <ProductsGroup name={" iWatch"} price={6000.99}></ProductsGroup>
    <ProductsGroup name={" iPhone"} price={25000.99}></ProductsGroup>
  </div>
);

export default App