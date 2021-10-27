import { useAuth0 } from '@auth0/auth0-react';
import React, { useState, useEffect, Fragment } from 'react'
import ForbidenComponent from '../../shared/components/forbiden/ForbidenComponent';

function ListarPage() {
  const [productos, setProductos] = useState([]);
  const {isAuthenticated} =useAuth0();
  const [validUser, setValidUser] =useState(false);
  
  const getProductos = async () => {
    try {
      const response = await fetch("http://localhost:3001/get-product");
      const jsonResponse = await response.json();
      const responseProductos = jsonResponse.data;
      const listProductos = responseProductos.map((productos) =>
        <tr>
          <th scope="row">{productos.id_producto}</th>
          <td>{productos.descripcion_producto}</td>
          <td>{productos.estado_producto}</td>
          <td>{productos.precio_producto}</td>
        </tr>
      );
      setProductos(listProductos)

      console.log(jsonResponse.data);
    }
    catch (error) {
      console.log(error)
    }

  }
 
  const grantAccess=()=>{
    if(localStorage.getItem("state")=="administrador"){
      setValidUser(true)
    }else{
      setValidUser(false)
    }
  }
        
  
  useEffect(() => {
    grantAccess();
    getProductos();
  },[isAuthenticated,validUser]);
    return (
      <div className="container">
        {validUser?<table className="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Descripción</th>
              <th scope="col">Estado</th>
              <th scope="col">Precio</th>
            </tr>
          </thead>
          <tbody>
            {productos}
          </tbody>
        </table>:<ForbidenComponent/>}
      </div>
    )
  
}



export default ListarPage