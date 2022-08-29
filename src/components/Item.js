
// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")

import { useState } from "react";

export default function Item(props) {

  //candidad en stock
  const [valorStock, setValorStock] = useState(props.stock)
  
  //Método para disminuir el stock
  function reducirStock(){

    if(valorStock > 0){

      //Reducir cantidad de stock
      const cantidadStock = valorStock - 1;
      
      setValorStock(cantidadStock);

      //aumentar cantidad de compras
      props.onAumentar();
    }
    else if(valorStock === 1){
      
      //aumentar cantidad de compras
      props.onAumentar();

      setValorStock("Agotado");

    }
    else{
      setValorStock("Agotado");
    }
  }

  return (
    <div className='producto'>
      {/* maquetar Item aquí */}
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <h5>En stock: <span>{valorStock}</span></h5>
      <button 
        onClick={reducirStock} 
        disabled={valorStock > 0 ? false : true}
      >
        {valorStock > 0 ? "COMPRAR" : "SIN STOCK"}
      </button>
    </div>
  )
}
