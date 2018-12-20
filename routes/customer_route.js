const express = require('express');
const router = express.Router();

// Require the controllers!!
const customer_controller = require('../controllers/customer_controller');


// a url customer.
router.get('/test', customer_controller.test);
router.get('/list', customer_controller.list);
router.post('/create', customer_controller.customer_create);
router.get('/:id', customer_controller.customer_details);
router.put('/:id/update', customer_controller.customer_update);
router.delete('/:id/delete', customer_controller.customer_delete);

module.exports = router;