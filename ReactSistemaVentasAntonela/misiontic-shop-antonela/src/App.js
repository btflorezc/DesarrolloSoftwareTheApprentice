import React, {Fragment} from "react";
import ProductosPage from "./productos/ProductosPage";
import VentasPage from "./admon-ventas/VentasPage";
import GestionUsuarios from "./gestion-usuarios/GestionUsuarios";
import ActualizarProductosPage from "./productos/actualizar-productos/ActualizarProductosPage";
import ListarPage from "./productos/listar-productos/ListarPage";
import HomePage from "./home/HomePage";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavbarComponent from "./shared/components/navbar/NavbarComponent";
import ForbidenComponent from "./shared/components/forbiden/ForbidenComponent";
import { useAuth0 } from "@auth0/auth0-react";


function App() {

  return (
    <Router>
      <NavbarComponent></NavbarComponent>
      <Switch>
      <Route path="/" exact>
          <HomePage/>
        </Route>
        <Route path="/productos" exact>
        {grantAccess() ? <ProductosPage />: <ForbidenComponent /> }
        </Route>
        <Route path="/productos/actualizar-productos" exact>
        {isAuthenticated ?<ActualizarProductosPage />: <ForbidenComponent /> }
        </Route>
        <Route path="/productos/listar-productos" exact>
          <ListarPage />
        </Route>
        <Route path="/admon-ventas" exact>
        {isAuthenticated ?<VentasPage />: <ForbidenComponent /> }
        </Route>
        <Route path="/gestion-usuarios" exact>
        {isAuthenticated ?<GestionUsuarios/>: <ForbidenComponent /> }
        </Route>
        <Route path="forbiden" exact>
          <ForbidenComponent />
        </Route>
      </Switch>
    
    </Router>
  );
}

export default App;
