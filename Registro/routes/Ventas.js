const express = require('express');
const router = express.Router();

const customerController= require('../controllers/customerController');

router.get('/', VentasController.list);                 
router.post('/add', VentasController.save);
router.get('/delete/:id', VentasController.delete);
router.get('/update/:id,VentasController.edit);

module.exports = router;