import React, { useState } from 'react'

const ProductosPage = () => {
    const [id_producto, setId_Producto] = useState(0);
    const [descripcion_producto, setDescripcion_Producto] = useState('');
    const [estado_producto, setEstado_Producto] = useState(0);
    const [precio_producto, setPrecio_Producto] = useState('');
    
    const addProducto = async() => {
        const productoData = {
            id_producto: id_producto,
            descripcion_producto: descripcion_producto,
            estado_producto: estado_producto,
            precio_producto: precio_producto,
            
        }
        const response = await fetch('http://localhost:3001/add-producto', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(productoData)
          });
          const jsonResponse = await response.json();
          console.log(jsonResponse);
      
    }
    return (
        <div className='container' >
            <form>
                <div className="mb-3">
                    <label for="id_producto">ID Producto*:</label>
                    <input type="number" className="form-control" id="id_usuarios" name="id_producto" onChange={(e) => setId_Producto(e.target.value) } />
                </div>
                <div className="mb-3">
                    <label for="descripcion_producto">Descripcion Producto*:</label>
                    <input type="text" class="form-control" id="descripcion_producto" name="descripcion_producto" onChange={(e) => setDescripcion_Producto(e.target.value) } />
                </div>
                <div className="mb-3">
                    <label for="estado_producto">Estado Producto*:</label>
                    <input type="text" className="form-control" id="estado_producto" name="estado_producto" onChange={(e) => setEstado_Producto(e.target.value) } />
                </div>
                <div className="mb-3">
                    <label for="precio_producto">Precio Producto*:</label>
                    <input type="text" className="form-control" id="precio_producto" name="precio_producto" onChange={(e) => setPrecio_Producto(e.target.value) } />
                </div>
                
                <button type="button" onClick={addProducto} class="btn btn-outline-success">Registrar</button>
            </form>
        </div>
    )
}

export default ProductosPage