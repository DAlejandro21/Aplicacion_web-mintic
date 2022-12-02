import React, { useState } from "react";
import uniqid from 'uniqid'
import axios from "axios";

//Funciones de envio de informacion
function AgregarProductos() {

  //Hooks
  const[nombreProducto, setNombreProducto] = useState('')
  const[unidadMed, setUnidadMed] = useState('')
  const[categoria, setCategoria] = useState('')
  const[descripcion, setDescripcion] = useState('')
  
  function agregarProducto() {
    var producto = {
      nombreProducto:nombreProducto,
      unidadMed:unidadMed,
      categoria:categoria,
      descripcion:descripcion,
      idProducto: uniqid()
    }

    console.log(producto)

    axios.post('/api/producto/agregarProducto', producto)
    .then (res => {
      alert(res.data)
    })
    .then(err => (console.log(err)))
  }

  return (
    <div className="container">
      <h2>Agregar producto</h2>

      <hr />

        <div className="col-md-6">
          <input type="text" className="form-control" id="nombreProducto" value={nombreProducto} onChange={(e)=>(setNombreProducto(e.target.value))} placeholder="Indique el nombre del producto" autoComplete="off"/>
        </div>
        <div className="col-md-6">
          <input type="text" className="form-control" id="unidadMed" value={unidadMed} onChange={(e)=>(setUnidadMed(e.target.value))} placeholder="Indique la unidad de medida" autoComplete="off"/>
        </div>
        <div className="col-md-6">
        <input type="text" className="form-control" id="categoria" value={categoria} onChange={(e)=>(setCategoria(e.target.value))} placeholder="Indique la categoria" autoComplete="off"/>
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            id="descripcion" value ={descripcion} onChange={(e)=>(setDescripcion(e.target.value))}
            placeholder="Colocar una breve descripcion del producto" autoComplete="off"
          />
        </div>
        <hr />
        <div className="col-12">
          <button onClick={agregarProducto} className="btn btn-success">Agregar</button>
        </div>
    </div>
  );
}

export default AgregarProductos