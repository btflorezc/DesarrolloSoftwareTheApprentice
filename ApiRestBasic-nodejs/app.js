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
app.use(cors({origin: true}));

app.get("/get-producto", async (request, response) => {
    const [rows, fields] = await connection.execute("SELECT * FROM productos");
    console.log({data:rows});
    response.json({data: rows});
});

app.get("/get-usuario", async (request, response) => {
    const[rows, fields] = await connection.execute("SELECT * FROM usuarios");
    console.log({data:rows});
    response.json({data: rows});
});

app.get("/get-usuario", async (req,res) =>{
    const email = req.query.email;
    const[rows, fields] = await connection.execute(`SELECT * FROM usuarios where email='${email}'`);
    res.json(rows[0])
})

app.get("/get-user", async (req,res) =>{
    const email = req.query.email;
    const[rows, fields] = await connection.execute(`SELECT * FROM users where email='${email}'`);
    res.json(rows[0])
})
app.post("/add-producto", async(req, res) => {
    const productosObj = {id_producto, descripcion_producto, estado_producto, precio_producto} = req.body;
    console.log (req);
    await connection.execute(`INSERT INTO productos (id_producto, descripcion_producto, estado_producto, precio_producto) VALUES('${id_producto}','${descripcion_producto}','${estado_producto}','${precio_producto}')`);
    res.json(req.body)});

app.post("/add-usuario", async(req, res) => {
    try{
        console.log(req.body)
        const {id_usuarios, tipo_documento, num_identificacion, nombre_usuario, estado, rol, email, telefono_usuario} = req.body;
        await connection.execute(`INSERT INTO usuarios (id_usuarios, tipo_documento, num_identificacion, nombre_usuario, estado, rol, email, telefono_usuario) VALUES ('${id_usuarios}','${tipo_documento}','${num_identificacion}','${nombre_usuario}','${estado}','${rol}','${email}','${telefono_usuario}')`);
        res.json({status: "OK"});
    }
    catch (error) {
        console.log(error);
        res.json(error)
    }
})

app.put('/update/id_usuarios', async(req, res) =>{
    console.log("Actualizando Usuario");
    try{
        /* const {id_usuarios} = req.params; */
        const {id_usuarios, tipo_documento, num_identificacion, nombre_usuario, estado, rol, email, telefono_usuario} = req.body;
        await connection.execute ('UPDATE usuarios SET tipo_documento = \''+tipo_documento+'\', num_identificacion = \''+num_identificacion+'\', nombre_usuario = \''+nombre_usuario+'\', estado = \''+estado+'\', rol = \''+rol+'\', email = \''+email+'\', telefono_usuario = \''+telefono_usuario+'\' WHERE id_usuarios = \''+id_usuarios+'\'')
        res.json({status:"OK"});
        console.log("Usuario actualizado");
    }
    catch (error) {
        console.log(error);
        res.json(error)
    }
})

//Consulta sólo por Id Usuario

/* app.get('/get-usuario/{id_usuarios}', async (req, res) =>{
    try {
    const {id_usuarios} = req.params
    await connection.execute ('SELECT tipo_documento = \''+tipo_documento+'\', num_identificacion = \''+num_identificacion+'\', nombre_usuario = \''+nombre_usuario+'\', estado = \''+estado+'\', rol = \''+rol+'\', email = \''+email+'\', telefono_usuario = \''+telefono_usuario+'\' FROM usuarios WHERE id_usuarios = \''+id_usuarios+'\'')
    res.json({status:"OK"});
    }
    catch (error) {
        console.log(error);
        res.json(error)
    }
}) */

app.get("/get-usuarios/:id_usuarios", async (request, response) => {
    const id_usuarios = request.params.id_usuarios;
    const consulta = 'SELECT id_usuarios, tipo_documento, num_identificacion, nombre_usuario, estado, rol, email, telefono_usuario FROM usuarios WHERE id_usuarios = \''+id_usuarios+'\'';
    console.log(consulta);
    const [rows, fields] = await connection.execute(consulta);
    /* response.json({status:"OK"}); */
    console.log({data:rows});
    response.json({data: rows});

});

/* Eliminar un registro, consultando por ID_Usuario */

app.delete("/delete-usuarios/:id_usuarios", async(request, response) =>{
    console.log("Eliminando Usuario");
    try{
        const id_usuarios = request.params.id_usuarios;
        const consulta = 'DELETE FROM usuarios WHERE id_usuarios = \''+id_usuarios+'\'';
        console.log(consulta);
        const [rows, fields] = await connection.execute(consulta);
        response.json({status:"OK"});
        console.log("Usuario eliminado");
    }
    catch (error) {
        console.log(error);
        response.json(error)
    }
})

/* app.delete("/delete-usuario", async(req, res) => {
    try{
        console.log(req.body)
        const {id_usuarios, tipo_documento, num_identificacion, nombre_usuario, estado, rol, email, telefono_usuario} = req.body;
        await connection.execute(`DELETE usuarios SET (id_usuarios, tipo_documento, num_identificacion, nombre_usuario, estado, rol, email, telefono_usuario) VALUES ('${id_usuarios}','${tipo_documento}','${num_identificacion}','${nombre_usuario}','${estado}','${rol}','${email}','${telefono_usuario}')`);
        res.json({status: "OK"});
    }
    catch (error) {
        console.log(error);
        res.json(error)
    }
})
 */
/* app.put("/update-producto", (req, res) => {
    const producto = req.body;
    console.log(producto.id_producto);
    res.json(producto)});

app.put("/update-usuario, (req, res) => {
    const usuario = req.body;
    console.log(producto.id_producto);
    res.json(usuario)});

app.delete("/delete-producto", (req, res) => {
    const producto = req.body;
    console.log(producto.id_producto);
    res.json(producto)}); */


app.listen(port, async() => {
    connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Anita0421',
        database: 'antonela_reposteria',
        Promise: bluebird
    });
    console.log("Server running on port: " + port)});