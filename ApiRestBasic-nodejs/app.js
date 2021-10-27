const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql2/promise');
const port = 3001
const bluebird = require('bluebird');
const { response } = require('express');
const { each, any } = require('bluebird');
let connection;


// configura el servidor para recibir datos en formato json
app.use(express.json());
app.use(cors({ origin: true }));

app.get("/get-product", async (request, response) => {
    const [rows, fields] = await connection.execute("SELECT * FROM products");
    console.log({ data: rows });
    response.json({ data: rows });
});


/* app.post("/add-producto", async (req, res) => {
    const productoObj = { id_producto, descripcion_producto, estado_producto, precio_producto } = req.body;
    console.log(req);
    await connection.execute(`INSERT INTO productos (id_producto, descripcion_producto, estado_producto, precio_producto) VALUES('${id_producto}','${descripcion_producto}','${estado_producto}','${precio_producto}')`);
    res.json(req.body)
}); */


app.post("/add-product", async (req, res) => {
    try {
        console.log(req.body)
        const { id_producto, descripcion_producto, estado_producto, precio_producto } = req.body;
        await connection.execute(`INSERT INTO products (id_producto, descripcion_producto, estado_producto, precio_producto) VALUES ('${id_producto}','${descripcion_producto}','${estado_producto}','${precio_producto}')`);
        res.json({ status: "OK" });
    }
    catch (error) {
        console.log(error);
        res.json(error)
    }
})

app.put('/update/id_producto', async (req, res) => {
    console.log("Actualizando Producto");
    try {

        const { id_producto, descripcion_producto, estado_producto, precio_producto } = req.body;
        await connection.execute('UPDATE products SET descripcion_producto = \'' + descripcion_producto + '\', estado_producto = \'' + estado_producto + '\', precio_producto = \'' + precio_producto + '\' WHERE id_producto = \'' + id_producto + '\'')
        res.json({ status: "OK" });
        console.log("Producto actualizado");
    }
    catch (error) {
        console.log(error);
        res.json(error)
    }
})

app.get("/get-product/:id_producto", async (request, response) => {
    const id_producto = request.params.id_producto;
    const consulta = 'SELECT id_producto, descripcion_producto, estado_producto, precio_producto FROM products WHERE id_producto = \'' + id_producto + '\'';
    console.log(consulta);
    const [rows, fields] = await connection.execute(consulta);
    /* response.json({status:"OK"}); */
    console.log({ data: rows });
    response.json({ data: rows });

});

app.get("/get-usuario", async (request, response) => {
    const [rows, fields] = await connection.execute("SELECT * FROM users");
    console.log({ data: rows });
    response.json({ data: rows });
});


app.get("/get-usuario", async (req, res) => {
    const email = req.query.email;
    const [rows, fields] = await connection.execute(`SELECT * FROM usuarios where email='${email}'`);
    res.json(rows[0])
})

app.get("/get-user", async (req, res) => {
    const email = req.query.email;
    const [rows, fields] = await connection.execute(`SELECT * FROM users where email='${email}'`);
    res.json(rows[0])
})


app.post("/add-user", async (req, res) => {
    try {
        console.log(req.body)
        const { id_usuarios, tipo_documento, num_identificacion, nombre_usuario, estado, rol, email, telefono_usuario } = req.body;
        await connection.execute(`INSERT INTO users (id_usuarios, tipo_documento, num_identificacion, nombre_usuario, estado, rol, email, telefono_usuario) VALUES ('${id_usuarios}','${tipo_documento}','${num_identificacion}','${nombre_usuario}','${estado}','${rol}','${email}','${telefono_usuario}')`);
        res.json({ status: "OK" });
    }
    catch (error) {
        console.log(error);
        res.json(error)
    }
})

app.put('/update/id_usuarios', async (req, res) => {
    console.log("Actualizando Usuario");
    try {
        /* const {id_usuarios} = req.params; */
        const { id_usuarios, tipo_documento, num_identificacion, nombre_usuario, estado, rol, email, telefono_usuario } = req.body;
        await connection.execute('UPDATE users SET tipo_documento = \'' + tipo_documento + '\', num_identificacion = \'' + num_identificacion + '\', nombre_usuario = \'' + nombre_usuario + '\', estado = \'' + estado + '\', rol = \'' + rol + '\', email = \'' + email + '\', telefono_usuario = \'' + telefono_usuario + '\' WHERE id_usuarios = \'' + id_usuarios + '\'')
        res.json({ status: "OK" });
        console.log("Usuario actualizado");
    }
    catch (error) {
        console.log(error);
        res.json(error)
    }
})



//Consulta sólo por Id Usuario



app.get("/get-user/:id_usuarios", async (request, response) => {
    const id_usuarios = request.params.id_usuarios;
    const consulta = 'SELECT id_usuarios, tipo_documento, num_identificacion, nombre_usuario, estado, rol, email, telefono_usuario FROM users WHERE id_usuarios = \'' + id_usuarios + '\'';
    console.log(consulta);
    const [rows, fields] = await connection.execute(consulta);
    /* response.json({status:"OK"}); */
    console.log({ data: rows });
    response.json({ data: rows });

});

/* Eliminar un registro, consultando por ID_Usuario */

app.delete("/delete-usuarios/:id_usuarios", async (request, response) => {
    console.log("Eliminando Usuario");
    try {
        const id_usuarios = request.params.id_usuarios;
        const consulta = 'DELETE FROM users WHERE id_usuarios = \'' + id_usuarios + '\'';
        console.log(consulta);
        const [rows, fields] = await connection.execute(consulta);
        response.json({ status: "OK" });
        console.log("Usuario eliminado");
    }
    catch (error) {
        console.log(error);
        response.json(error)
    }
})


app.get("/get-venta", async (request, response) => {
        const[rows, fields] = await connection.execute("SELECT * FROM ventas");
        console.log({data:rows});
        response.json({data: rows});
});
    
app.post("/add-venta", async(req, res) => {
    try{
        console.log(req.body)
        const {id_venta, valor_total_venta, id_producto, cantidad, precio_unitario_producto, fecha_venta, documento_identificacion_cliente, nombre_cliente} = req.body;
        await connection.execute(`INSERT INTO ventas (id_venta, valor_total_venta, id_producto, cantidad, precio_unitario_producto, fecha_venta, documento_identificacion_cliente, nombre_cliente) VALUES ('${id_venta}','${valor_total_venta}','${id_producto}','${cantidad}','${precio_unitario_producto}','${fecha_venta}','${documento_identificacion_cliente}','${nombre_cliente}')`);
        res.json({status: "OK"});
    }
    catch (error) {
        console.log(error);
        res.json(error)
    }
})

app.get("/get-ventas1/:id_venta", async (request, response) => {
    const id_venta = request.params.id_venta;
    const consulta = 'SELECT id_venta, valor_total_venta, id_producto, cantidad, precio_unitario_producto, fecha_venta, documento_identificacion_cliente, nombre_cliente FROM ventas WHERE id_venta = \''+id_venta+'\'';
    console.log(consulta);
    const [rows, fields] = await connection.execute(consulta);
    /* response.json({status:"OK"}); */
    console.log({data:rows});
    response.json({data: rows});

});

app.get("/get-ventas2/:documento_identificacion_cliente", async (request, response) => {
    const documento_identificacion_cliente = request.params.documento_identificacion_cliente;
    const consulta = 'SELECT id_venta, valor_total_venta, id_producto, cantidad, precio_unitario_producto, fecha_venta, documento_identificacion_cliente, nombre_cliente FROM ventas WHERE documento_identificacion_cliente = \''+documento_identificacion_cliente+'\'';
    console.log(consulta);
    const [rows, fields] = await connection.execute(consulta);
    /* response.json({status:"OK"}); */
    console.log({data:rows});
    response.json({data: rows});

});

app.get("/get-ventas3/:nombre_cliente", async (request, response) => {
    const nombre_cliente = request.params.nombre_cliente;
    const consulta = 'SELECT id_venta, valor_total_venta, id_producto, cantidad, precio_unitario_producto, fecha_venta, documento_identificacion_cliente, nombre_cliente FROM ventas WHERE nombre_cliente = \''+nombre_cliente+'\'';
    console.log(consulta);
    const [rows, fields] = await connection.execute(consulta);
    /* response.json({status:"OK"}); */
    console.log({data:rows});
    response.json({data: rows});

});

app.put('/update-ventas/:id_venta', async(req, res) =>{
    console.log("Actualizando registro de venta");
    try{
        /* const {id_venta} = req.params; */
        const {id_venta, valor_total_venta, id_producto, cantidad, precio_unitario_producto, fecha_venta, documento_identificacion_cliente, nombre_cliente} = req.body;
        await connection.execute ('UPDATE ventas SET id_venta = \''+id_venta+'\', valor_total_venta= \''+valor_total_venta+'\', id_producto= \''+id_producto+'\', cantidad= \''+cantidad+'\', precio_unitario_producto= \''+precio_unitario_producto+'\', fecha_venta= \''+fecha_venta+'\', documento_identificacion_cliente= \''+documento_identificacion_cliente+'\', nombre_cliente= \''+nombre_cliente+'\' WHERE id_venta = \''+id_venta+'\'')
        res.json({status:"OK"});
        console.log("Registro de venta actualizado");
    }
    catch (error) {
        console.log(error);
        res.json(error)
    }
})

app.listen(port, async () => {
    connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Anita0421',
        database: 'antonela_reposteria1',
        Promise: bluebird
    });
    console.log("Server running on port: " + port)
});