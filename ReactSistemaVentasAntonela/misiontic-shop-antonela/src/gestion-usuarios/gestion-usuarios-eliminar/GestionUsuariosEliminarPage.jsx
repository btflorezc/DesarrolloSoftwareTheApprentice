import { useAuth0 } from '@auth0/auth0-react';
import React, { useState, useEffect } from 'react'
import ForbidenComponent from '../../shared/components/forbiden/ForbidenComponent';

function GestionUsuariosEliminarPage() {
    const {isAuthenticated} =useAuth0();
    const [validUser, setValidUser] =useState(false);
    const limpiarCampos = async (search) => {
        document.getElementById('id_usuarios').value = "";
        document.getElementById('tipo_documento').value = "";
        document.getElementById('num_identificacion').value = "";
        document.getElementById('nombre_usuario').value = "";
        document.getElementById('estado').value = "";
        document.getElementById('rol').value = "";
        document.getElementById('email').value = "";
        document.getElementById('telefono_usuario').value = "";
    }

    const deleteUsuario = async () => {
        alert("La usuario se ha eliminado correctamente.");
        try {
            var id_usuarios_eliminar = document.getElementById('id_usuarios').value;
            const url = "http://localhost:3001/delete-usuarios/" + id_usuarios_eliminar;
            console.log(url);
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }

            });
            const jsonResponse = await response.json();
            console.log(jsonResponse);

            console.log(response);
        }
        catch (error) {
            console.log(error)
        }
    }

    const getUsuarios = async (search) => {
        try {
            limpiarCampos();
            var src = document.getElementById('search').value;
            const url = "http://localhost:3001/get-usuario/" + src;
            console.log(url);
            const response = await fetch(url);
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            document.getElementById('id_usuarios').value = jsonResponse.data[0].id_usuarios;
            document.getElementById('tipo_documento').value = jsonResponse.data[0].tipo_documento;
            document.getElementById('num_identificacion').value = jsonResponse.data[0].num_identificacion;
            document.getElementById('nombre_usuario').value = jsonResponse.data[0].nombre_usuario;
            document.getElementById('estado').value = jsonResponse.data[0].estado;
            document.getElementById('rol').value = jsonResponse.data[0].rol;
            document.getElementById('email').value = jsonResponse.data[0].email;
            document.getElementById('telefono_usuario').value = jsonResponse.data[0].telefono_usuario;

            console.log(jsonResponse.data);
        }
        catch (error) {
            console.log(error)
        }
    }
    const grantAccess = () => {
        if (localStorage.getItem("state") == "administrador") {
            setValidUser(true)
        } else {
            setValidUser(false)
        }
    }


    useEffect(() => {
        grantAccess();
        
    }, [isAuthenticated, validUser]);
    return (
        <div className="container">
            <h4>Gestión de Usuarios: Eliminar Usuario</h4>
            <div className='container'></div><div class="input-group">
                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                    aria-describedby="search-addon" id="search" name="search" />
                <button type="button" onClick={getUsuarios} class="btn btn-outline-primary">Buscar Id Usuario</button>
            </div>
            {validUser?<form>
                <div className="mb-3">
                    <label for="id_usuarios">ID Usuario*:</label>
                    <input type="number" class="form-control" id="id_usuarios" name="id_usuarios" disabled="true" /* value = {tipo} */ /* onChange={(e) => setTipo_Documento(e.target.value) *//* } */ />
                </div>
                <div className="mb-3">
                    <label for="tipo_documento">Tipo Documento*:</label>
                    <input type="text" class="form-control" id="tipo_documento" name="tipo_documento" /* value = {tipo} */ /* onChange={(e) => setTipo_Documento(e.target.value) *//* } */ />
                </div>
                <div className="mb-3">
                    <label for="num_identificacion">Número de Identificación*:</label>
                    <input type="number" className="form-control" id="num_identificacion" name="num_identificacion" /* value={num} */ /* onChange={(e) => setNum_Identificacion(e.target.value) *//* } */ />
                </div>
                <div className="mb-3">
                    <label for="nombre_usuario">Nombre Completo*:</label>
                    <input type="text" className="form-control" id="nombre_usuario" name="nombre_usuario" /* value= {nombre} */ /* onChange={(e) => setNombre_Usuario(e.target.value) *//* } */ />
                </div>
                <div className="mb-3">
                    <label for="estado">Estado*:</label>
                    <input type="text" className="form-control" id="estado" name="estado" /* value= {estado} */ /* onChange={(e) => setEstado(e.target.value) *//* } */ />
                </div>
                <div className="mb-3">
                    <label for="rol">Rol*:</label>
                    <input type="text" className="form-control" id="rol" name="rol" /* value={rol} */ /* onChange={(e) => setRol(e.target.value) *//* }  */ />
                </div>
                <div className="mb-3">
                    <label for="email">Correo Electrónico*:</label>
                    <input type="email" className="form-control" id="email" name="email" /* value={email} */ /* onChange={(e) => setEmail(e.target.value) *//* } */ />
                </div>
                <div className="mb-3">
                    <label for="telefono_usuario">Número Contacto*:</label>
                    <input type="texto" className="form-control" id="telefono_usuario" name="telefono_usuario" /* value={telefono} */ /* onChange={(e) => setTelefono_Usuario(e.target.value) *//* } */ />
                </div>
                <button type="button" onClick={deleteUsuario} class="btn btn-outline-success">Eliminar</button>
            </form>:<ForbidenComponent/>}
        </div>

    )
}
export default GestionUsuariosEliminarPage
