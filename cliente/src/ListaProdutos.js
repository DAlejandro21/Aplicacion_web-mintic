import axios from "axios";
import { set } from "mongoose";
import React, { useEffect, useState } from "react";
import VerProducto from "./VerProducto";

function ListaProductos() {
  const [dataproductos, setdataproductos] = useState([]);

  useEffect(() => {
    axios.get("/api/producto/obtenerproductos").then((res) => {
        console.log(res.data);
        setdataproductos(res.data)

      })
      .catch((err) => {
        console.log(err)
      });
  });

  //Mapear los datos de los productos
  const listaproductos = dataproductos.map((producto) => {
    return (
      <div className="container">
        <VerProducto producto={producto} />
      </div>
    );
  });

  return (
    <div className="container">
      <h2>Ver lista de productos</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre de Producto</th>
            <th>Unidad M.</th>
            <th>Categoria</th>
            <th>Descripcion</th>
            <td>-</td>
          </tr>
        </thead>
      </table>
      {listaproductos}
    </div>
  );
}

export default ListaProductos;
