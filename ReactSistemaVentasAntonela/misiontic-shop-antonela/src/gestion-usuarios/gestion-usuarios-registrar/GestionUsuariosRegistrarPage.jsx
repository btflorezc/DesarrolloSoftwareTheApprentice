import React, { useState } from 'react'

const GestionUsuariosRegistrarPage = () => {
    const [id_usuarios, setId_Usuarios] = useState(0);
    const [tipo_documento, setTipo_Documento] = useState('');
    const [num_identificacion, setNum_Identificacion] = useState(0);
    const [nombre_usuario, setNombre_Usuario] = useState('');
    const [estado, setEstado] = useState('');
    const [rol, setRol] = useState('');
    const [email, setEmail] = useState('');
    const [telefono_usuario, setTelefono_Usuario] = useState(0);
    const addUsuario = async() => {
        const usuarioData = {
            id_usuarios: id_usuarios,
            tipo_documento: tipo_documento,
            num_identificacion: num_identificacion,
            nombre_usuario: nombre_usuario,
            estado: estado,
            rol: rol,
            email: email,
            telefono_usuario: telefono_usuario
        }
        const response = await fetch('http://localhost:3001/add-usuario', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuarioData)
          });
          const jsonResponse = await response.json();
          console.log(jsonResponse);
      
    }
    return (
        <div className='container' >
            <form>
                <div className="mb-3">
                    <label for="id_usuarios">ID Usuario*:</label>
                    <input type="number" className="form-control" id="id_usuarios" name="id_usuarios" onChange={(e) => setId_Usuarios(e.target.value) } />
                </div>
                <div className="mb-3">
                    <label for="tipo_documento">Tipo Documento*:</label>
                    <input type="text" class="form-control" id="tipo_documento" name="tipo_documento" onChange={(e) => setTipo_Documento(e.target.value) } />
                </div>
                <div className="mb-3">
                    <label for="num_identificacion">Número de Identificación*:</label>
                    <input type="number" className="form-control" id="num_identificacion" name="num_identificacion" onChange={(e) => setNum_Identificacion(e.target.value) } />
                </div>
                <div className="mb-3">
                    <label for="nombre_usuario">Nombre Completo*:</label>
                    <input type="text" className="form-control" id="nombre_usuario" name="nombre_usuario" onChange={(e) => setNombre_Usuario(e.target.value) } />
                </div>
                <div className="mb-3">
                    <label for="estado">Estado*:</label>
                    <input type="text" className="form-control" id="estado" name="estado" onChange={(e) => setEstado(e.target.value) } />
                </div>
                <div className="mb-3">
                    <label for="rol">Rol*:</label>
                    <input type="text" className="form-control" id="rol" name="rol" onChange={(e) => setRol(e.target.value) } />
                </div>
                <div className="mb-3">
                    <label for="email">Correo Electrónico*:</label>
                    <input type="email" className="form-control" id="email" name="email" onChange={(e) => setEmail(e.target.value) } />
                </div>
                <div className="mb-3">
                    <label for="telefono_usuario">Número Contacto*:</label>
                    <input type="number" className="form-control" id="telefono_usuario" name="telefono_usuario" onChange={(e) => setTelefono_Usuario(e.target.value) } />
                </div>
                <button type="button" onClick={addUsuario} class="btn btn-outline-success">Registrar</button>
            </form>
        </div>
    )
}

export default GestionUsuariosRegistrarPage
