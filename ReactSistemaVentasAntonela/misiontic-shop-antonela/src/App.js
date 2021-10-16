import React, {Fragment} from "react";
import LoginPage from "./login/LoginPage";
import RegisterPage from "./register/RegisterPage";
import ProductosPage from "./productos/ProductosPage";
import VentasPage from "./admon-ventas/VentasPage";
import GestionUsuarios from "./gestion-usuarios/GestionUsuarios";
import ActualizarProductosPage from "./actualizar-productos/ActualizarProductosPage";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavbarComponent from "./shared/components/navbar/NavbarComponent";


function App() {
  return (
    <Router>
      <NavbarComponent></NavbarComponent>
      <Switch>
      <Route path="/" exact>
          <h1>Home</h1>
        </Route>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        <Route path="/register" exact>
          <RegisterPage />
        </Route>
        <Route path="/productos" exact>
          <ProductosPage />
        </Route>
        <Route path="/actualizar-productos" exact>
          <ActualizarProductosPage />
        </Route>
        <Route path="/admon-ventas" exact>
          <VentasPage />
        </Route>
        <Route path="/gestion-usuarios" exact>
          <GestionUsuarios/>
        </Route>
      </Switch>
    
    </Router>
  );
}

export default App;
