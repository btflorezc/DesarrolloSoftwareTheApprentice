'use strict';
const Prod_vent = require('../models/prod_vent.model');
exports.findAll = function(req, res) {

    Prod_vent.findAll(function(err, prod_ven) {
  console.log('controller')
  if (err)
  res.send(err);
  console.log('res', prod_ven);
  res.send(prod_ven);
});
};
exports.create = function(req, res) {
  const new_prod_ven = new Prod_vent(req.body);
 
  //handles null error 
 if(req.body.constructor === Object && Object.keys(req.body).length === 0){
      res.status(400).send({ error:true, message: 'Favor diligencie todos los campos obligatorios' });
  }else{
    Prod_vent.create(new_prod_ven, function(err, prod_ven) {
          if (err)
          res.send(err);
          res.json({error:false,message:"La venta se registro satistactoriamente!",data:prod_ven});
      });
  }
};
exports.findById = function(req, res) {
    Prod_vent.findById(req.params.id, function(err, prod_ven) {
  if (err)
  res.send(err);
  res.json(prod_ven);
});
};
exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Favor diligencie todos los campos obligatorios' });
  }else{
    Prod_vent.update(req.params.id, req.params.id1, new Prod_vent(req.body), function(err, prod_ven) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'la venta se actualizo con exito' });
});
}
};
exports.delete = function(req, res) {
    Prod_vent.delete( req.params.id, function(err, prod_ven) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'la venta se elimino satisfactoriamente' });
});
};