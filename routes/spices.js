// var express = require('express');
// var spices_controlers = require('../controllers/spices');
// var router = express.Router();

// // GET request for all spices
// router.get('/', spices_controlers.spice_view_all_Page);

// // GET request for one spice detail
// router.get('/:id', spices_controlers.spice_detail);

// // POST request for creating a spice
// router.post('/', spices_controlers.spice_create_post);

// // PUT request to update a spice
// router.put('/:id', spices_controlers.spice_update_put);

// // DELETE request to delete a spice
// router.delete('/:id', spices_controlers.spice_delete);

// module.exports = router;


// 

// var express = require('express');
// var router = express.Router();
// var Spice = require('../models/spices'); // Import the Spice model

// // Spice Search Results page
// router.get('/', function(req, res, next) {
//     Spice.find({}, function(err, spices) {  // Find all spices in the collection
//         if (err) {
//             return next(err); // Handle errors
//         }
//         res.render('spices', {
//             title: 'Spice Search Results',
//             spices: spices  // Pass the spices data to the view
//         });
//     });
// });

// module.exports = router;

// var express = require('express');
// var spice_controlers = require('../controllers/spices'); 
// var router = express.Router();
 
// /* GET spices page. */
// router.get('/', spice_controlers.spice_view_all_Page); 
 
// // router.get('/:id', spice_controlers.spice_detail); 
// module.exports = router;

var express = require('express');
var spice_controlers = require('../controllers/spices');
var router = express.Router();
 
/* GET spices page. */
router.get('/', spice_controlers.spice_view_all_Page);

 
//router.get('/spices/:id', spice_controlers.spice_detail);
router.get('/spices/:id', spice_controlers.spice_detail);
 
 
// POST route for creating a new spice
router.post('/', spice_controlers.spice_create_post);
router.put('/:id', spice_controlers.spice_update_put);
 
router.delete('/:id', spice_controlers.spice_delete);
 
 
/* GET detail costume page */
router.get('/detail', spice_controlers.spice_view_one_Page);



 
module.exports = router;