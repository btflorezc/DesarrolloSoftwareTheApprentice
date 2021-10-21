import { useAuth0 } from '@auth0/auth0-react';
import React, { useState, useEffect } from 'react'
import ForbidenComponent from '../../shared/components/forbiden/ForbidenComponent';

function ListarPage() {
  const [productos, setProductos] = useState([]);
  const { user, isAuthenticated } = useAuth0();
  const getProductos = async () => {
    try {
      const response = await fetch("http://localhost:3001/get-producto");
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

  const validateUserRole = async () => {
    const response = await fetch('http://localhost:3001/get-user?email=${user.email}');
    const jsonResponse = await response.json();
    return jsonResponse;
  }
  async function grantAccess() {
    let userData;
    if (isAuthenticated) {
      userData = await validateUserRole();
    }
    else {
      return false;
    }
    if (userData) {
      if (userData.rol != "invitado") {
        return true;
      }
      else {
        return false;
      }
    }
    else {
      return false;
    }
  }
  useEffect(() => {
    getProductos();
  }, []);
  if (grantAccess) {


    return (
      <div className="container">
        <table class="table">
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
        </table>
      </div>
    )
  }
  else {
    return <ForbidenComponent />
  }
}

export default ListarPage