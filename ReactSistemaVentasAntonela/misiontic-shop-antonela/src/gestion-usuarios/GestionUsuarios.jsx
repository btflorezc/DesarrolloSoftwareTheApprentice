import React, {Fragment, useState, useEffect} from 'react';

function GestionUsuarios() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const getUsers = () =>{
            fetch('https://localhost:5000/api/v1/usuarios')
            .then(res => res.json())
            .then(res => console.log(res))
        }
        getUsers()

    }
    )

    return (
        <Fragment>
            <h1>Gestión de Usuarios</h1>
        </Fragment>
    )
}

export default GestionUsuarios;