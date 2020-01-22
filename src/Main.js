import React from 'react';

class Main extends React.Component {

  render() {

    /*=================================================================================
    *	 [Object.assign()] nos ayuda a clonar un objeto o de una manera mas clara, combinar
    *  las propiedades de un objeto.
    * --------------------------------------------------------------------------------*/
    const perfil = {
      name: 'Evan Alain',
      lastName: 'Nieves Martinez'
    }
    const region = {
      country: 'México'
    }
    const social = {
      facebook: '@evanAlain'
    }

    /*=================================================================================
    *	 Recibe varios parámetros.
    *   1.- Elemento objetivo (en este caso es un objeto vacío {})
    *   2 3 4.- Elementos de donde recibira los datos
    * --------------------------------------------------------------------------------*/
    const result = Object.assign({}, perfil, region, social)

    /*=================================================================================
    *	 NOTA: El orden si altera el resultado, ya que si hay mas de una propiedad con el
    *  mismo nombre, las ultima encontrada reescribira las demas coincidencias.
    *  Este metodo no analiza a profundidad, si el elemento contiene mas objetos o hijos
    *  conmas contenido dentro
    * --------------------------------------------------------------------------------*/

    console.log(result);

    return (
      <div>
      <h1>Object.assign() ⚡</h1>
    </div>
    )
  }
};

export default Main;