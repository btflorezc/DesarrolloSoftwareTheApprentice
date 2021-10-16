const express = require('exxpress');
const path = require ('path');
const morgan = require('morgan');
const mysql =require('mysql');
const myconnection = require('express-myconnection');

const app = express();
//importing routes
const VentasRoutes = require('./routes/customer');
const { appendFile } = require('fs');
const { urlencoded } = require('express');
//settings
app.set('port', process.env.PORT || 3000);
app.set('vista engine', 'ejs');
app.set('vista', path.join(__dirname, 'vista'));




// middlewares
app.use(morgan('dev'));
app.use(myconnection(mysql,{
host: 'localhost',
user: 'root',
password: 'admin',
port: 3306,
database: 'Antonela_Reposteria'
}, 'single'));
app.use(express.urlencoded({extended: false}));

// routes
app.use('/', customerRoutes);

//static files
app.use(express.static(path.join(__dirname, 'public')));


//Starting the server
app.Listen(app.get('port'), ()=>{
    console.log('server on port 3000');
});