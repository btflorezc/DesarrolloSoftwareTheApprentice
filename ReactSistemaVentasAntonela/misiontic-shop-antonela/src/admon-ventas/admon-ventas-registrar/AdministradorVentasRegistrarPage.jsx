import React, { useState } from 'react'

const AdministradorVentasRegistrarPage = () => {
    const [id_venta, setIdVenta] = useState(0);
    const [valor_total_venta, setValorTotalVenta] = useState(0);
    const [id_producto, setIdProducto] = useState(0);
    const [cantidad, setCantidad] = useState('');
    const [precio_unitario_producto, setPrecioUnitarioProducto] = useState('');
    const [fecha_venta, setFechaVenta] = useState('');
    const [documento_identificacion_cliente, setDocumentoIdentificacionCliente] = useState('');
    const [nombre_cliente, setNombreCliente] = useState('');
    const addVenta = async() => {
        alert("La venta se ha registrado correctamente.");        
        const ventaData = {
            id_venta: id_venta,
            valor_total_venta: valor_total_venta,
            id_producto: id_producto,
            cantidad: cantidad,
            precio_unitario_producto: precio_unitario_producto,
            fecha_venta: fecha_venta,
            documento_identificacion_cliente: documento_identificacion_cliente,
            nombre_cliente: nombre_cliente
        }
        const response = await fetch('http://localhost:3001/add-venta', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(ventaData)
          });
          const jsonResponse = await response.json();
          console.log(jsonResponse);
      
    }
    return (
        <div className='container' >
            <h4>Administrador Ventas: Registrar Venta</h4>
            <form>
                <div className="mb-3">
                    <label for="id_venta">ID Venta*:</label>
                    <input type="number" className="form-control" id="id_venta" name="id_venta" disabled="true" onChange={(e) => setIdVenta(e.target.value) }/>
                </div>
                <div className="mb-3">
                    <label for="valor_total_venta">Valor Total Venta*:</label>
                    <input type="number" class="form-control" id="valor_total_venta" name="valor_total_venta" onChange={(e) => setValorTotalVenta(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label for="id_producto">Id Producto*:</label>
                    <input type="number" className="form-control" id="id_producto" name="id_producto" onChange={(e) => setIdProducto(e.target.value) }/>
                </div>
                <div className="mb-3">
                    <label for="cantidad">Cantidad*:</label>
                    <input type="text" className="form-control" id="cantidad" name="cantidad" onChange={(e) => setCantidad(e.target.value) }/>
                </div>
                <div className="mb-3">
                    <label for="precio_unitario_producto">Precio Unitario Producto*:</label>
                    <input type="text" className="form-control" id="precio_unitario_producto" name="precio_unitario_producto" onChange={(e) => setPrecioUnitarioProducto(e.target.value) }/>
                </div>
                <div className="mb-3">
                    <label for="fecha_venta">Fecha Venta*:</label>
                    <input type="date"/*  min="2021-01-01" max="2021-12-31"  */className="form-control" id="fecha_venta" name="fecha_venta" onChange={(e) => setFechaVenta(e.target.value) }/>
                </div>
                <div className="mb-3">
                    <label for="documento_identificacion_cliente">Documento de Identidad Cliente*:</label>
                    <input type="number" className="form-control" id="documento_identificacion_cliente" name="documento_identificacion_cliente" onChange={(e) => setDocumentoIdentificacionCliente(e.target.value) }/>
                </div>
                <div className="mb-3">
                    <label for="nombre_cliente">Nombre Cliente*:</label>
                    <input type="text" className="form-control" id="nombre_cliente" name="nombre_cliente" onChange={(e) => setNombreCliente(e.target.value) }/>
                </div>
                <button type="submit" onClick={addVenta} class="btn btn-outline-success">Registar</button>
            </form>
        </div>
    )
}

export default AdministradorVentasRegistrarPage
