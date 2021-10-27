import React, { useState } from 'react'


function AdministradorVentasActualizarPage() {

    const limpiarCampos1  = async (search1) =>{
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

    const limpiarCampos2  = async (search2) =>{
        document.getElementById('id_venta').value = "";
        document.getElementById('valor_total_venta').value = "";
        document.getElementById('id_producto').value = "";
        document.getElementById('cantidad').value = "";
        document.getElementById('precio_unitario_producto').value = "";
        document.getElementById('fecha_venta').value = "";
        document.getElementById('documento_identificacion_cliente').value = "";
        document.getElementById('nombre_cliente').value = "";
                
        document.getElementById('documento_identificacion_cliente').value = "";
    }

    const limpiarCampos3  = async (search1) =>{
        document.getElementById('id_venta').value = "";
        document.getElementById('valor_total_venta').value = "";
        document.getElementById('id_producto').value = "";
        document.getElementById('cantidad').value = "";
        document.getElementById('precio_unitario_producto').value = "";
        document.getElementById('fecha_venta').value = "";
        document.getElementById('documento_identificacion_cliente').value = "";
        document.getElementById('nombre_cliente').value = "";
                
        document.getElementById('nombre_cliente').value = "";
    }

    const addVenta = async () => {

        alert("La venta se ha actualizado correctamente.");

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
        const response = await fetch('http://localhost:3001/update-ventas/:id_venta', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ventaData)
        });
        const jsonResponse = await response.json();
        console.log(jsonResponse);

    }

    const getVentas1 = async (search1) => {
        try {
            limpiarCampos1();
            var src1 = document.getElementById('search1').value;
            const url1 = "http://localhost:3001/get-ventas1/" + src1;
            console.log(url1);
            const response = await fetch(url1);
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


    const getVentas2 = async (search2) => {
        try {
            limpiarCampos2();
            var src2 = document.getElementById('search2').value;
            const url2 = "http://localhost:3001/get-ventas2/" + src2;
            console.log(url2);
            const response = await fetch(url2);
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


    const getVentas3 = async (search3) => {
        try {
            limpiarCampos3();
            var src3 = document.getElementById('search3').value;
            const url3 = "http://localhost:3001/get-ventas3/" + src3;
            console.log(url3);
            const response = await fetch(url3);
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
        <h4>Administrador Ventas: Actualizar Venta</h4>

        <div className='container'></div><div class="input-group">
            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                aria-describedby="search-addon" id="search1" name="search1" />
            <button type="button" onClick={getVentas1} class="btn btn-outline-primary" id="boton">Buscar Id Venta</button>
        </div>

        <div className='container'></div><div class="input-group">
            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                aria-describedby="search-addon" id="search2" name="search2" />
            <button type="button" onClick={getVentas2} class="btn btn-outline-primary" id="boton">Documento de Identidad del Cliente</button>
        </div>

       <div className='container'></div><div class="input-group">
            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                aria-describedby="search-addon" id="search3" name="search3" />
            <button type="button" onClick={getVentas3} class="btn btn-outline-primary" id="boton">Nombre del Cliente</button>
        </div>

            <form>
                <div className="mb-3">
                    <label for="id_venta">ID Venta*:</label>
                    <input type="number" className="form-control" id="id_venta" name="id_venta" disabled="true" /* onChange={(e) => setId_Venta(e.target.value) } */ />
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
                <button type="submit" onClick={addVenta} class="btn btn-outline-success">Actualizar</button>
            </form>
        </>        
    )
}

export default AdministradorVentasActualizarPage
