// routes/resource.js

var express = require('express');
var router = express.Router();

// Require controller modules.
var api_controller = require('../controllers/api');
var spice_controller = require('../controllers/spices');  

/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);

/// SPICE ROUTES ///
// POST request for creating a Spice
router.post('/spices', spice_controller.spice_create_post);
// DELETE request to delete Spice
router.delete('/spices/:id', spice_controller.spice_delete);
// PUT request to update Spice
router.put('/spices/:id', spice_controller.spice_update_put);
// GET request for one Spice
router.get('/spices/:id', spice_controller.spice_detail);
// GET request for list of all Spices
router.get('/spices', spice_controller.spice_list);

module.exports = router;
