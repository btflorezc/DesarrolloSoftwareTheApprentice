/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from 'react-router-dom'
import '../navbar/NavStyles.css';
import { useAuth0 } from "@auth0/auth0-react";

function NavbarComponent(props) {
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const {user, isAuthenticated} = useAuth0();
    let title = props.title;

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link>
                        {isAuthenticated? null:<a className="nav-link" onClick={() => loginWithRedirect()}>Login</a>}
                        {isAuthenticated ?<a className="nav-link" onClick={() => logout({ returnTo: window.location.origin })}>Logout</a>: null}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Administrar Productos
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                <li><Link to="/productos/" className="dropdown-item" href="#">Registrar Producto</Link></li>
                                <li><Link to="/productos/actualizar-productos/" className="dropdown-item" href="#">Actualizar Producto</Link></li>
                                <li><Link to="/productos/listar-productos/" className="dropdown-item" href="#">Listar Productos</Link></li>
                            </ul>
                        </li>
                        <Link to="/admon-ventas" className="nav-link" href="#">Administrar Ventas</Link>
                        <li className="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Gestión de Usuarios
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                <li><Link to="/gestion-usuarios/gestion-usuarios-registrar/" className="dropdown-item" href="#">Registrar Usuario</Link></li>
                                <li><Link to="/gestion-usuarios/gestion-usuarios-actualizar/" className="dropdown-item" href="#">Actualizar Usuario</Link></li>
                                <li><Link to="/gestion-usuarios/gestion-usuarios-eliminar/" className="dropdown-item" href="#">Eliminar Usuario</Link></li>
                                <li><Link to="/gestion-usuarios/gestion-usuarios-listar/" className="dropdown-item" href="#">Listar Usuarios</Link></li>
                            </ul>
                        </li>
                    </div>
                </div>
                <form class="d-flex">
{/*                             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
                            <button className="btn btn-outline-success" type="submit">{isAuthenticated ? user.name: "User"}</button>
                </form>
            </div>
        </nav>
    );
}

export default NavbarComponent;