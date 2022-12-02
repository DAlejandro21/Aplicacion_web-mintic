import axios from "axios";
import { set } from "mongoose";
import React, { useEffect, useState } from "react"
import VerProducto from "./VerProducto";

function ListaProductos() {

  const[dataproductos, setdataproductos]=useState([])

  useEffect(()=> {
    axios.get('/api/producto/obtenerproductos'). then(res => {
      console.log(res)
    }). catch(err =>{
      console.log(err)
    })
  })
  
  return (
    <div>
      <h1>Ver lista de productos</h1>
      <VerProducto/>
    </div>
  )
}
export default ListaProductos;
