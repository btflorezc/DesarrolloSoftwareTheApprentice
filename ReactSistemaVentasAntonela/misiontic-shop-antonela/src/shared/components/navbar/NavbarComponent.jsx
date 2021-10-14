import React from "react";
import { Link } from 'react-router-dom'
import '../navbar/NavStyles.css';
import Logo from '../navbar/assets2/img/Logo.png';

function NavbarComponent(props) {

    let title = props.title;

    console.log(props.title);

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
                        <Link to="/login" className="nav-link" href="#">Login</Link>
                        <Link to="/register" className="nav-link" href="#">Registrarse</Link>
                        <li className="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Administración Productos
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                <li><Link to="/productos/" className="dropdown-item" href="#">Registrar Producto</Link></li>
                                <li><Link to="/actualizar-productos/" className="dropdown-item" href="#">Actualizar Producto</Link></li>
                                <li><a className="dropdown-item" href="#">Listar Productos</a></li>
                            </ul>
                        </li>
                        <Link to="/admon-ventas" className="nav-link" href="#">Administrar Ventas</Link>
                        <Link to="/gestion-usuarios" className="nav-link" href="#">Gestión de Usuarios</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavbarComponent;