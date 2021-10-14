'use strict';
var dbConn = require('../../config/db.config');
//crear objeto venta
var Prod_ven = function(prod_ven){
  this.cod_prod      = prod_ven.cod_prod;
  this.cod_vent      = prod_ven.cod_vent;
  this.cantidad      = prod_ven.cantidad;
  
  
};
Prod_ven.create = function (newProdVent, result) {
dbConn.query("INSERT INTO prod_vent set ?", newProdVent, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  console.log(res.insertId);
  result(null, res.insertId);
}
});
};
Prod_ven.findById = function (id, result) {
dbConn.query("Select * from prod_vent where cod_vent = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
Prod_ven.findAll = function (result) {
dbConn.query("Select * from prod_vent", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('pord_vent : ', res);
  result(null, res);
}
});
};
Prod_ven.update = function(id, id1, prod_ven, result){
dbConn.query("UPDATE prod_vent SET cod_prod=?,cod_vent=?,cantidad=? WHERE cod_prod=? AND cod_vent=?", [prod_ven.cod_prod, prod_ven.cod_vent, prod_ven.cantidad, id, id1], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};
Prod_ven.delete = function(id, result){
dbConn.query("DELETE FROM prod_vent WHERE cod_vent = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};
module.exports= Prod_ven;