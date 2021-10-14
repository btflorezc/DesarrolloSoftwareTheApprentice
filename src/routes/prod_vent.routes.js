const express = require('express')
const router = express.Router()
const prod_ventController =   require('../controllers/prod_vent.controller');
// Retrieve all employees
router.get('/', prod_ventController.findAll);
// Create a new employee
router.post('/', prod_ventController.create);
// Retrieve a single employee with id
router.get('/:id', prod_ventController.findById);
// Update a employee with id
router.put('/:id/:id1', prod_ventController.update);
// Delete a employee with id
router.delete('/:id', prod_ventController.delete);
module.exports = router