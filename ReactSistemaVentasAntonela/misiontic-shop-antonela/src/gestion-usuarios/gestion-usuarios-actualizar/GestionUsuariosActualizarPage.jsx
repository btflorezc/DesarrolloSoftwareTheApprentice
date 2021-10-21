import React, { useState } from 'react'

const GestionUsuariosActualizarPage = () => {

        const [usuarios, setUsuarios] = useState([]);
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
    

        return (
            <><div className='container'></div><div class="input-group">
                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                    aria-describedby="search-addon" />
                <button type="button" onClick={getUsuarios} class="btn btn-outline-primary">Buscar Id Usuario</button>
            </div>
            <form>
                   <div className="mb-3">
                        <label for="tipo_documento">Tipo Documento*:</label>
                        <input type="text" class="form-control" id="tipo_documento" name="tipo_documento" /* onChange={(e) => setTipo_Documento(e.target.value) *//* } */ />
                    </div>
                    <div className="mb-3">
                        <label for="num_identificacion">Número de Identificación*:</label>
                        <input type="number" className="form-control" id="num_identificacion" name="num_identificacion" /* onChange={(e) => setNum_Identificacion(e.target.value) *//* } */ />
                    </div>
                    <div className="mb-3">
                        <label for="nombre_usuario">Nombre Completo*:</label>
                        <input type="text" className="form-control" id="nombre_usuario" name="nombre_usuario" /* onChange={(e) => setNombre_Usuario(e.target.value) *//* } */ />
                    </div>
                    <div className="mb-3">
                        <label for="estado">Estado*:</label>
                        <input type="text" className="form-control" id="estado" name="estado" /* onChange={(e) => setEstado(e.target.value) *//* } */ />
                    </div>
                    <div className="mb-3">
                        <label for="rol">Rol*:</label>
                        <input type="text" className="form-control" id="rol" name="rol" /* onChange={(e) => setRol(e.target.value) *//* }  *//>
                    </div>
                    <div className="mb-3">
                        <label for="email">Correo Electrónico*:</label>
                        <input type="email" className="form-control" id="email" name="email" /* onChange={(e) => setEmail(e.target.value) *//* } */ />
                    </div>
                    <div className="mb-3">
                        <label for="telefono_usuario">Número Contacto*:</label>
                        <input type="number" className="form-control" id="telefono_usuario" name="telefono_usuario" /* onChange={(e) => setTelefono_Usuario(e.target.value) *//* } */ />
                    </div>
                </form></>
        )
}
export default GestionUsuariosActualizarPage