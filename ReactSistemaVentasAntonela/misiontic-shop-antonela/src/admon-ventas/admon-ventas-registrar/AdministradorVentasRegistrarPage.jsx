import React, { useState } from 'react'

const AdministradorVentasRegistrarPage = () => {
    const [id_venta, setIdVenta] = useState(0);
    const [valor_total_venta, setValorTotalVenta] = useState('');
    const [id_producto, setDoc_IdProducto] = useState(0);
    const [cantidad, setCantidad] = useState('');
    const [precio_unitario_producto, setPrecioUnitarioProducto] = useState('');
    const [fecha_venta, setFechaVenta] = useState('');
    const [documento_identificacion_cliente, setDocumentoIdentificacionCliente] = useState('');
    const [nombre_cliente, setNombre_Cliente] = useState('');
    const addVenta = async() => {
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
                <button type="button" onClick={addVenta} class="btn btn-outline-success">Registar</button>
            </form>
        </div>
    )
}

export default AdministradorVentasRegistrarPage
