import React from "react";
import {Link} from 'react-router-dom'

function VerProducto({ producto }) {
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
            <Link to={'/editarproducto/${producto.idProducto}'}>
              <li class="btn btn-primary">Editar</li>
            </Link>
            &nbsp;
            <button type="button" class="btn btn-danger">Eliminar</button>
          </td>
        </tr>
      </tbody>
      </table>
    </div>
  );
}
export default VerProducto;
