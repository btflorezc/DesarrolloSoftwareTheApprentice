import React, { useState } from 'react'

function AdministradorVentasBuscarPage() {

    const limpiarCampos  = async (search) =>{
        document.getElementById('id_venta').value = "";
        document.getElementById('valor_total_venta').value = "";
        document.getElementById('id_producto').value = "";
        document.getElementById('cantidad').value = "";
        document.getElementById('precio_unitario_producto').value = "";
        document.getElementById('fecha_venta').value = "";
        document.getElementById('documento_identificacion_cliente').value = "";
        document.getElementById('nombre_cliente').value = "";
                
        document.getElementById('id_venta').value = "";
    }

    const addVenta = async () => {
        const ventaData = {
            id_venta: document.getElementById('id_venta').value,
            valor_total_venta: document.getElementById('valor_total_venta').value,
            id_producto: document.getElementById('id_producto').value,
            cantidad: document.getElementById('cantidad').value,
            precio_unitario_producto: document.getElementById('precio_unitario_producto').value,
            fecha_venta: document.getElementById('fecha_venta').value,
            documento_identificacion_cliente: document.getElementById('documento_identificacion_cliente').value,
            nombre_cliente: document.getElementById('nombre_cliente').value
        }
        const response = await fetch('http://localhost:3001/update/id_venta', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ventaData)
        });
        const jsonResponse = await response.json();
        console.log(jsonResponse);

        }

    const getVentas = async (search) => {
        try {
            limpiarCampos();
            var src = document.getElementById('search').value;
            const url = "http://localhost:3001/get-venta/" + src;
            console.log(url);
            const response = await fetch(url);
            const jsonResponse = await response.json();
           
            console.log(jsonResponse);
            document.getElementById('id_venta').value = jsonResponse.data[0].id_venta;
            document.getElementById('valor_total_venta').value = jsonResponse.data[0].valor_total_venta;
            document.getElementById('id_producto').value = jsonResponse.data[0].id_producto;
            document.getElementById('cantidad').value = jsonResponse.data[0].cantidad;
            document.getElementById('precio_unitario_producto').value = jsonResponse.data[0].precio_unitario_producto;            
            document.getElementById('fecha_venta').value = jsonResponse.data[0].fecha_venta;
            document.getElementById('documento_identificacion_cliente').value = jsonResponse.data[0].documento_identificacion_cliente;
            document.getElementById('nombre_cliente').value = jsonResponse.data[0].nombre_cliente;

            console.log(jsonResponse.data);
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <>
        <h4>Administrador Ventas: Buscar Venta</h4>
        <div className='container'></div><div class="input-group">
            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                aria-describedby="search-addon" id="search" name="search" />
            <button type="button" onClick={getVentas} class="btn btn-outline-primary" id="boton">Buscar Id Venta</button>
        </div>

        <div className='container'></div><div class="input-group">
            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                aria-describedby="search-addon" id="search" name="search" />
            <button type="button" onClick={getVentas} class="btn btn-outline-primary" id="boton">Documento de Identidad del Cliente</button>
        </div>

        <div className='container'></div><div class="input-group">
            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                aria-describedby="search-addon" id="search" name="search" />
            <button type="button" onClick={getVentas} class="btn btn-outline-primary" id="boton">Nombre del Cliente</button>
        </div>

            <form>
                <div className="mb-3">
                    <label for="id_venta">ID Venta*:</label>
                    <input type="number" className="form-control" id="id_venta" name="id_venta" /* onChange={(e) => setId_Venta(e.target.value) } */ />
                </div>
                <div className="mb-3">
                    <label for="valor_total_venta">Valor Total Venta*:</label>
                    <input type="text" class="form-control" id="valor_total_venta" name="valor_total_venta" /* onChange={(e) => setFecha_Venta(e.target.value) }  *//>
                </div>
                <div className="mb-3">
                    <label for="id_producto">Id Producto*:</label>
                    <input type="text" className="form-control" id="id_producto" name="id_producto" /* onChange={(e) => setId_Producto(e.target.value) } */ />
                </div>
                <div className="mb-3">
                    <label for="cantidad">Cantidad*:</label>
                    <input type="text" className="form-control" id="cantidad" name="cantidad" /* onChange={(e) => setEstado_Producto(e.target.value) } */ />
                </div>
                <div className="mb-3">
                    <label for="precio_unitario_producto">Precio Unitario Producto*:</label>
                    <input type="text" className="form-control" id="precio_unitario_producto" name="precio_unitario_producto" /* onChange={(e) => setId_Usuario(e.target.value) } */ />
                </div>
                <div className="mb-3">
                    <label for="fecha_venta">Fecha Venta*:</label>
                    <input type="date" className="form-control" id="fecha_venta" name="fecha_venta" /* onChange={(e) => setDoc_Identificacion_Cliente(e.target.value) }  *//>
                </div>
                <div className="mb-3">
                    <label for="documento_identificacion_cliente">Documento de Identidad Cliente*:</label>
                    <input type="number" className="form-control" id="documento_identificacion_cliente" name="documento_identificacion_cliente" /* onChange={(e) => setNombre_Cliente(e.target.value) } */ />
                </div>
                <div className="mb-3">
                    <label for="nombre_cliente">Nombre Cliente*:</label>
                    <input type="text" className="form-control" id="nombre_cliente" name="nombre_cliente" /* onChange={(e) => setNombre_Cliente(e.target.value) } */ />
                </div>
            </form></>
    )
}

export default AdministradorVentasBuscarPage