const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql2/promise');
const port = 3001
const bluebird = require('bluebird');
const { response } = require('express');
let connection; 


// configura el servidor para recibir datos en formato json
app.use(express.json());
app.use(cors({origin: true}));
app.get("/get-producto", async (request, response) => {
    const [rows, fields] = await connection.execute("SELECT *FROM productos");
    console.log({data:rows})
    response.json({data: rows});
})

app.get("/get-usuario", async (req,res) =>{
    const email = req.query.email;
    const[rows, fields] = await connection.execute(`SELECT * FROM usuarios where email='${email}'`);
    res.json(rows[0])
})
app.post("/add-producto", async(req, res) => {
    const [id_producto, descripcion_producto, estado_producto, precio_producto] = req.body;
    await connection.execute(`INSERT INTO productos (id_producto, descripcion_producto, estado_producto, precio_producto) VALUES('${id_producto}','${descripcion_producto}','${estado_producto}','${precio_producto}')`);
    res.json(req.body)
})

app.put("/update-producto", (req, res) => {
    const producto = req.body;
    console.log(producto.id_producto)
    res.json(producto)
})
app.delete("/delete-producto", (req, res) => {
    const producto = req.body;
    console.log(producto.id_producto)
    res.json(producto)
})


app.listen(port, async() => {
    connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Anita0421',
        database: 'antonela_reposteria',
        Promise: bluebird
    });
    console.log("Server running on port: " + port);
});