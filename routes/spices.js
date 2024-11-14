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


var express = require('express');
var router = express.Router();
var Spice = require('../models/spices'); // Adjust the path if necessary

// Route to handle the /spices route (or however it's set up)
router.get('/', function(req, res, next) {
  // Query to find all spices from the database
  Spice.find({}, function(err, spices) {
    if (err) {
      // Log the error and pass it to the error handler
      console.error('Error retrieving spices:', err);
      return next(err);
    }

    // Log the spices data to verify the query
    console.log('Spices found:', spices);

    if (!spices || spices.length === 0) {
      // If no spices found, render the page with an empty array
      return res.render('spices', {
        title: 'Spice Search Results',
        spices: []  // Pass an empty array if no data
      });
    }

    // If spices are found, render the page and pass the spices data
    res.render('spices', {
      title: 'Spice Search Results',
      spices: spices  // Pass the spices data to the view
    });
  });
});

module.exports = router;
