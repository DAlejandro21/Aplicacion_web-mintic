//import logo from './logo.svg';
import './App.css';
import EditarProductos from './EditarProductos';
import ListaProductos from './ListaProdutos';
import AgregarProductos from './AgregarProductos';
import EliminarProducto from './EliminarProducto';
import {BrowserRouter, Routes, Route} from 'react-router-dom' /*Manejo de rutas de la app*/

function App() {
  return (
    <div className="App">
      
      <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Mi aplicacion de productos</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Productos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/agregarproducto">Agregar producto</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/editarproducto">Editar producto</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/eliminarproducto">Eliminar producto</a>
        </li>

      </ul>
      
    </div>
  </div>
</nav>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListaProductos/>} exact></Route>
          <Route path='/agregarproducto' element={<AgregarProductos/>} exact></Route>
          <Route path='/editarproducto' element={<EditarProductos/>} exact></Route>
          <Route path='/eliminarproducto' element={<EliminarProducto/>} exact></Route>
          
        </Routes>


      </BrowserRouter>

      

    </div>
  )
}

export default App;

  