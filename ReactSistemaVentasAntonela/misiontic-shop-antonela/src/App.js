import React, {Fragment} from "react";
import ProductosPage from "./productos/ProductosPage";
import VentasPage from "./admon-ventas/VentasPage";
import GestionUsuarios from "./gestion-usuarios/GestionUsuarios";
import ActualizarProductosPage from "./actualizar-productos/ActualizarProductosPage";
import HomePage from "./home/HomePage";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavbarComponent from "./shared/components/navbar/NavbarComponent";
import ForbidenComponent from "./shared/components/forbiden/ForbidenComponent";
import { useAuth0 } from "@auth0/auth0-react";


function App() {
  const {isAuthenticated} = useAuth0();
  const validateUserRole = () => {
    
  }
  return (
    <Router>
      <NavbarComponent></NavbarComponent>
      <Switch>
      <Route path="/" exact>
          <HomePage/>
        </Route>
        <Route path="/productos" exact>
        {isAuthenticated ? <ProductosPage />: <ForbidenComponent /> }
        </Route>
        <Route path="/actualizar-productos" exact>
        {isAuthenticated ?<ActualizarProductosPage />: <ForbidenComponent /> }
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
