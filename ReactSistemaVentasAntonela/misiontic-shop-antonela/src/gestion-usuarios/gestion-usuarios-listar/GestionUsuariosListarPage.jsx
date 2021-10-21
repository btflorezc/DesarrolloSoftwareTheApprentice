import { useAuth0 } from '@auth0/auth0-react';
import React, { useState, useEffect } from 'react'
import ForbidenComponent from '../../shared/components/forbiden/ForbidenComponent';

function GestionUsuariosListarPage() {
    const [usuarios, setUsuarios] = useState([]);
    const {user,isAuthenticated} = useAuth0();
    const getUsuarios = async () => {
        try {
            const response = await fetch("http://localhost:3001/get-usuario");
            const jsonResponse = await response.json();
            const responseUsuarios = jsonResponse.data;
            const listUsuarios = responseUsuarios.map((usuarios) =>
                <tr>
                    <th scope="row">{usuarios.id_usuarios}</th>
                    <td>{usuarios.tipo_documento}</td>
                    <td>{usuarios.num_identificacion}</td>
                    <td>{usuarios.nombre_usuario}</td>
                    <td>{usuarios.estado}</td>
                    <td>{usuarios.rol}</td>
                    <td>{usuarios.email}</td>
                    <td>{usuarios.telefono_usuario}</td>
                </tr>
            );
            setUsuarios(listUsuarios)

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
        getUsuarios();
    }, []);
    if(grantAccess){

    
        return (
            <div className="container">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">ID Usuario</th>
                            <th scope="col">Tipo Documento</th>
                            <th scope="col">Número Identificación</th>
                            <th scope="col">Nombre Completo</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Rol</th>
                            <th scope="col">Correo Electrónico</th>
                            <th scope="col">Número Contacto</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios}
                    </tbody>
                </table>
            </div>
        )
        }
        else{
            return<ForbidenComponent/>
        }
}

export default GestionUsuariosListarPage;