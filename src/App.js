// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.

import { useState } from 'react';
import Cabecera from './components/Cabecera';
import Listado from './components/Listado';

function App() {

  //Contador de elementos comprados
  const [contadorCompras, setContadorCompras] = useState(0);

  //Método aumentar contador
  function aumentarContador(){

    //Aumentar el valor de cantidad de compras
    const cantidad = contadorCompras + 1;

    setContadorCompras(cantidad);

  }

  return (
    <div className="App">
      <Cabecera totalContador = {contadorCompras}/>
      <Listado onSumarContador = {aumentarContador}/>
    </div>
  );
}

export default App;
