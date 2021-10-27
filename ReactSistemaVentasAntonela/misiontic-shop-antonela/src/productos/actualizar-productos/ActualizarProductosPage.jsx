import React, { Fragment, useState , Component} from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import ForbidenComponent from '../../shared/components/forbiden/ForbidenComponent';
import { Redirect } from 'react-router';
import Swal from 'sweetalert2'




function ActualizarProductosPage() {
    
    const limpiarCampos = async (search) => {
        document.getElementById('id_producto').value = "";
        document.getElementById('descripcion_producto').value = "";
        document.getElementById('estado_producto').value = "";
        document.getElementById('precio_producto').value = "";

    }


    const addProducto = async () => {
        /* const Swal = await require('sweetalert2');
        preventDefault();
        Swal.fire(
            'Buen trabajo!',
            'Se actualizó el producto!',
            'success',
                  
          ) */
        
        alert("El producto se almacenó correctamente");
        const productoData = {
            id_producto: document.getElementById('id_producto').value,
            descripcion_producto: document.getElementById('descripcion_producto').value,
            estado_producto: document.getElementById('estado_producto').value,
            precio_producto: document.getElementById('precio_producto').value

        }
            
          
        
        const response = await fetch('http://localhost:3001/update/id_producto', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productoData)
        });
        const jsonResponse = await response.json();
        
        console.log(jsonResponse);

        
    }

    const getProducto = async (search) => {
        try {
            
            limpiarCampos();
            var src1 = document.getElementById('search').value;
            const url = "http://localhost:3001/get-product/" + src1;
            console.log(url);
            const response = await fetch(url);
            const jsonResponse = await response.json();

            console.log(jsonResponse);
            document.getElementById('id_producto').value = jsonResponse.data[0].id_producto;
            document.getElementById('descripcion_producto').value = jsonResponse.data[0].descripcion_producto;
            document.getElementById('estado_producto').value = jsonResponse.data[0].estado_producto;
            document.getElementById('precio_producto').value = jsonResponse.data[0].precio_producto;


            console.log(jsonResponse.data);
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        


        <>

            <div className='container'></div><div class="input-group">
                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                    aria-describedby="search-addon" id="search" name="search" />
                <button type="button" onClick={getProducto} className="btn btn-outline-primary" id="boton">Buscar Id Producto</button>
            </div>
            <form>
                <div className="mb-3">
                    <label for="id_producto">ID Producto*:</label>
                    <input type="number" className="form-control" id="id_producto" name="id_producto" disabled="true" /* value = {tipo} */ /* onChange={(e) => setTipo_Documento(e.target.value) *//* } */ />
                </div>
                <div className="mb-3">
                    <label for="descripcion_producto">Descripcion Producto*:</label>
                    <input type="text" className="form-control" id="descripcion_producto" name="descripcion_producto" /* value = {tipo} */ /* onChange={(e) => setTipo_Documento(e.target.value) *//* } */ />
                </div>
                <div className="mb-3">
                    <label for="estado_producto">Estado Producto*:</label>
                    <input type="text" className="form-control" id="estado_producto" name="estado_producto" /* value={num} */ /* onChange={(e) => setNum_Identificacion(e.target.value) *//* } */ />
                </div>
                <div className="mb-3">
                    <label for="precio_producto">Precio Producto*:</label>
                    <input type="number" className="form-control" id="precio_producto" name="precio_producto" /* value= {nombre} */ /* onChange={(e) => setNombre_Usuario(e.target.value) *//* } */ />
                </div>

                <button type="submit" onClick={addProducto}  className="btn1" >Actualizar</button>
                
                
                
            </form></>
           
    )
    

}

export default ActualizarProductosPage;