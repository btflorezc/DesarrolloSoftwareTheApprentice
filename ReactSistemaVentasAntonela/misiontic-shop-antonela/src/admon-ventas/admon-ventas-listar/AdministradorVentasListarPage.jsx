import { useAuth0 } from '@auth0/auth0-react';
import React, { useState, useEffect } from 'react'
import ForbidenComponent from '../../shared/components/forbiden/ForbidenComponent';

function AdministradorVentasListarPage() {
    const [ventas, setVentas] = useState([]);
    const {user,isAuthenticated} = useAuth0();
    const getVentas = async () => {
        try {
            const response = await fetch("http://localhost:3001/get-venta");
            const jsonResponse = await response.json();
            const responseVentas = jsonResponse.data;
            const listVentas = responseVentas.map((ventas) =>
                <tr>
                    <th scope="row">{ventas.id_venta}</th>
                    <td>{ventas.valor_total_venta}</td>
                    <td>{ventas.id_producto}</td>
                    <td>{ventas.cantidad}</td>
                    <td>{ventas.precio_unitario_producto}</td>
                    <td>{ventas.fecha_venta}</td>
                    <td>{ventas.documento_identificacion_cliente}</td>
                    <td>{ventas.nombre_cliente}</td>
                </tr>
            );
            setVentas(listVentas)

            console.log(jsonResponse.data);
        }
        catch (error) {
            console.log(error)
        }

    }
    
    const validateUserRole = async () =>{
      const response= await fetch('http://localhost:3001/get-user?email=${user.email}');
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
        getVentas();
    }, []);
    if(grantAccess){

    
        return (
            <div className="container">
                <h4>Administrador Ventas: Ventas</h4>
                <table class="table">
                      <thead>
                        <tr>
                            <th scope="col">ID Venta</th>
                            <th scope="col">Valor Total de Venta</th>
                            <th scope="col">Id Producto</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Precio Unitario de Producto</th>
                            <th scope="col">Fecha Venta</th>
                            <th scope="col">Documento de Identificación Cliente</th>
                            <th scope="col">Nombre Cliente</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ventas}
                    </tbody>
                </table>
            </div>
        )
        }
        else{
            return<ForbidenComponent/>
        }
}

export default AdministradorVentasListarPage;