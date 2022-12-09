import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams,} from "react-router-dom"

function EditarProductos() {

  const params = useParams()

  //Hooks
  
  const[nombreProducto, setNombreProducto] = useState('')
  const[unidadMed, setUnidadMed] = useState('')
  const[categoria, setCategoria] = useState('')
  const[descripcion, setDescripcion] = useState('')
 
  useEffect(() =>{
    axios.post('/api/producto/obtenerdataproducto', {idProducto: params.idProducto}).then(res =>{
      console.log(res.data[0])

      const dataproducto = res.data[0]

      setNombreProducto(dataproducto.nombreProducto)
      setUnidadMed(dataproducto.unidadMed)
      setCategoria(dataproducto.categoria)
      setDescripcion(dataproducto.descripcion)

    })
  }, [])

  function editarproducto(){

    //nuevo objeto para editar el produto

    const actualizarproducto = {
      nombreProducto:nombreProducto,
      unidadMed:unidadMed,
      categoria:categoria,
      descripcion:descripcion,
      idProducto: params.idProducto
    }

    //peticion al servidor por medio de la ruta

    axios.post('/api/producto/actualizarproducto', actualizarproducto)
    .then (res => {
      console.log(res.data)
      alert(res.data)
    })
    .then(err => (console.log(err)))
  
  }



  return (
    <div className="container">
      <h2>Agregar producto</h2>

      <hr />

        <div className="col-md-6">
          <input type="text" className="form-control" id="nombreProducto" value={nombreProducto} onChange={(e)=>(setNombreProducto(e.target.value))} placeholder="Indique el nombre del producto" autoComplete="off" required/>
        </div>
        <div className="col-md-6">
          <input type="text" className="form-control" id="unidadMed" value={unidadMed} onChange={(e)=>(setUnidadMed(e.target.value))} placeholder="Indique la unidad de medida" autoComplete="off" required/>
        </div>
        <div className="col-md-6">
        <input type="text" className="form-control" id="categoria" value={categoria} onChange={(e)=>(setCategoria(e.target.value))} placeholder="Indique la categoria" autoComplete="off" required/>
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            id="descripcion" value ={descripcion} onChange={(e)=>(setDescripcion(e.target.value))}
            placeholder="Colocar una breve descripcion del producto" autoComplete="off required/"
          />
        </div>
        <hr />
        <div className="col-12">
          <button onClick={editarproducto} className="btn btn-info">Editar producto</button>
        </div>
    </div>

  )
}
export default EditarProductos

/*
    <div>
      <h2>Editar productos</h2>
      <h4>{params.idProducto}</h4>
    </div>
    */