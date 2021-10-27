import React, { useState } from 'react'

function GestionUsuariosActualizarPage() {

    const limpiarCampos  = async (search) =>{
        document.getElementById('id_usuarios').value = "";
        document.getElementById('tipo_documento').value = "";
        document.getElementById('num_identificacion').value = "";
        document.getElementById('nombre_usuario').value = "";
        document.getElementById('estado').value = "";
        document.getElementById('rol').value = "";
        document.getElementById('email').value = "";
        document.getElementById('telefono_usuario').value = "";
    }


    const addUsuario = async () => {
        alert("La usuario se ha actualizado correctamente.");  
        const usuarioData = {
            id_usuarios: document.getElementById('id_usuarios').value,
            tipo_documento: document.getElementById('tipo_documento').value,
            num_identificacion: document.getElementById('num_identificacion').value,
            nombre_usuario: document.getElementById('nombre_usuario').value,
            estado: document.getElementById('estado').value,
            rol: document.getElementById('rol').value,
            email: document.getElementById('email').value,
            telefono_usuario: document.getElementById('telefono_usuario').value
        }
        const response = await fetch('http://localhost:3001/update/id_usuarios', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuarioData)
        });
        const jsonResponse = await response.json();
        console.log(jsonResponse);
    }

    const getUsuarios = async (search) => {
        try {
            limpiarCampos();
            var src = document.getElementById('search').value;
            const url = "http://localhost:3001/get-usuarios/" + src;
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

    return (



        <>
        <h4>Gestión de Usuarios: Actualizar Usuario</h4>
        <div className='container'></div><div class="input-group">
            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                aria-describedby="search-addon" id="search" name="search" />
            <button type="button" onClick={getUsuarios} class="btn btn-outline-primary" id="boton">Buscar Id Usuario</button>
        </div>
            <form>
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
                <button type="button" onClick={addUsuario} class="btn btn-outline-success">Actualizar</button>
            </form></>
    )
}
export default GestionUsuariosActualizarPage
