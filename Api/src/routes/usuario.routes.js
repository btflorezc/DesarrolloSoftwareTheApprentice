const express = require('express')
const router = express.Router()
const usuarioController =   require('../controllers/usuario.controller');
// Retrieve all employees
router.get('/', usuarioController.findAll);
// Create a new employee
router.post('/', usuarioController.create);
// Retrieve a single employee with id
router.get('/id_usuarios', usuarioController.findById_usuarios);
router.get('/email', usuarioController.findByEmail);
// Update a employee with id
router.put('/id_usuarios', usuarioController.update);
// Delete a employee with id
router.delete('/id_usuarios', usuarioController.delete);
module.exports = router