import React from "react";
import ProductosPage from "./productos/ProductosPage";

import AdministradorVentasRegistrarPage from "./admon-ventas/admon-ventas-registrar/AdministradorVentasRegistrarPage";
import AdministradorVentasActualizarPage from "./admon-ventas/admon-ventas-actualizar/AdministradorVentasActualizarPage";
import AdministradorVentasBuscarPage from "./admon-ventas/admon-ventas-buscar/AdministradorVentasBuscarPage";
import AdministradorVentasListarPage from "./admon-ventas/admon-ventas-listar/AdministradorVentasListarPage";
import GestionUsuariosRegistrarPage from "./gestion-usuarios/gestion-usuarios-registrar/GestionUsuariosRegistrarPage";
import GestionUsuariosActualizarPage from "./gestion-usuarios/gestion-usuarios-actualizar/GestionUsuariosActualizarPage";
import GestionUsuariosEliminarPage from "./gestion-usuarios/gestion-usuarios-eliminar/GestionUsuariosEliminarPage";
import GestionUsuariosListarPage from "./gestion-usuarios/gestion-usuarios-listar/GestionUsuariosListarPage";
import ActualizarProductosPage from "./productos/actualizar-productos/ActualizarProductosPage";
import ListarPage from "./productos/listar-productos/ListarPage";
import HomePage from "./home/HomePage";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavbarComponent from "./shared/components/navbar/NavbarComponent";
import ForbidenComponent from "./shared/components/forbiden/ForbidenComponent";
import { useAuth0 } from "@auth0/auth0-react";

/* import grantAccess from "./productos/listar-productos/ListarPage"; */

function App() {
const {isAuthenticated} = useAuth0();

  return (
    <Router>
      <NavbarComponent></NavbarComponent>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/productos" exact>
          <ProductosPage />
        </Route>
        <Route path="/productos/actualizar-productos" exact>
          <ActualizarProductosPage /> 
        </Route>
        <Route path="/productos/listar-productos" exact>
          <ListarPage />
        </Route>
        
        <Route path="/admon-ventas/admon-ventas-listar" exact>
          <AdministradorVentasListarPage />
        </Route>
        <Route path="/admon-ventas/admon-ventas-registrar" exact>
        {isAuthenticated ?<AdministradorVentasRegistrarPage />: <ForbidenComponent /> }
        </Route>
        <Route path="/admon-ventas/admon-ventas-actualizar" exact>
        {isAuthenticated ?<AdministradorVentasActualizarPage />: <ForbidenComponent /> }
        </Route>
        <Route path="/admon-ventas/admon-ventas-buscar" exact>
        {isAuthenticated ?<AdministradorVentasBuscarPage />: <ForbidenComponent /> }
        </Route>
        <Route path="/gestion-usuarios/gestion-usuarios-listar" exact>
          <GestionUsuariosListarPage />
        </Route>
        <Route path="/gestion-usuarios/gestion-usuarios-registrar" exact>
        {isAuthenticated ?<GestionUsuariosRegistrarPage />: <ForbidenComponent /> }
        </Route>
        <Route path="/gestion-usuarios/gestion-usuarios-actualizar" exact>
        {isAuthenticated ?<GestionUsuariosActualizarPage />: <ForbidenComponent /> }
        </Route>
        <Route path="/gestion-usuarios/gestion-usuarios-eliminar" exact>
        {isAuthenticated ?<GestionUsuariosEliminarPage />: <ForbidenComponent /> }
        </Route>
        <Route path="forbiden" exact>
          <ForbidenComponent />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
