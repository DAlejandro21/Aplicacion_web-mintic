import axios from "axios";
import React from "react";
import {Link, useNavigate} from 'react-router-dom'

function VerProducto({producto}){

  const navegar = useNavigate()

  function eliminarproducto(idProducto){
    axios.post('/api/producto/borrarproducto', {idProducto: idProducto}).then(res =>{
      console.log(res.data)
      alert(res.data)
      navegar(0)
    }).catch(err =>{
      console.log(err)
    })
    
  } //end function eliminarproducto(idProducto){
  return (
    <div className="container">
      <table className="table">
      <tbody>
        <tr>
          <td>{producto.idProducto}</td>
          <td>{producto.nombreProducto}</td>
          <td>{producto.unidadMed}</td>
          <td>{producto.categoria}</td>
          <td>{producto.descripcion}</td>
          <td>
            <Link to={`/editarproducto/${producto.idProducto}`}>
              <li class="btn btn-primary">Editar</li>
              </Link>

            &nbsp;
            <button type="button" class="btn btn-danger" onClick={() =>{eliminarproducto(producto.idProducto)}}>Eliminar</button>
          </td>
        </tr>
      </tbody>
      </table>
    </div>
  );
}
export default VerProducto;
