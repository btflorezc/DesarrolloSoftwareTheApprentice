const express = require('express');
const bodyParser = require('body-parser');
// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 5000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
// define a root route
app.get('/', (req, res) => {
  res.send("ANTONELA REPOSTERIA");
});
const productoRoutes = require('./src/routes/producto.routes')
const usuarioRoutes = require('./src/routes/usuario.routes')
const ventaRoutes = require('./src/routes/venta.routes')
const prod_ventRoutes = require('./src/routes/prod_vent.routes')
// using as middleware
app.use('/api/v1/producto', productoRoutes)
app.use('/api/v1/usuario', usuarioRoutes)
app.use('/api/v1/venta', ventaRoutes)
app.use('/api/v1/prod_vent', prod_ventRoutes)
/

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});