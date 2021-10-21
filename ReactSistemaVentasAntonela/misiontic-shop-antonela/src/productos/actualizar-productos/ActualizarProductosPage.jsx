import React, { Fragment, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import ForbidenComponent from '../../shared/components/forbiden/ForbidenComponent';
import { Redirect } from 'react-router';

function ActualizarProductosPage() {
    const {isAuthenticated} = useAuth0();
    if (localStorage.getItem("state") == "user") {
        return (
            <Fragment>
                <div>
                    <header>
                        <h4 className="Actualizar">Actualizar Producto</h4>
                    </header>
                    <div className="mb-3">
                        <label for="ID" className="form-label">Identificador Único*:</label><br />
                        <input type="text" class="form-control" id="ID" name="ID" />
                    </div>
                    <div className="mb-3">
                        <label for="Nombre">Descripción*:</label><br />
                        <input type="text" className="form-control" id="Nombre" name="Nombre" />
                    </div>
                    <div className="mb-3">
                        <label for="Descripción">Valor Unitario*:</label><br />
                        <input type="text" className="form-control" id="Descripción" name="Descripción" />
                    </div>
                    <div className="mb-3">
                        <label for="Estado">Estado*:</label><br />
                        <input type="text" className="form-control" id="Estado" name="Estado" />
                    </div>
                    <input type="button" className="button1" value="Actualizar" type="submit" />
                    <input type="button" className="button2" value="Cancelar"></input>
                </div>
            </Fragment>
        )
    }
    else {
        return <Redirect to="/"></Redirect>
    }
}

export default ActualizarProductosPage;