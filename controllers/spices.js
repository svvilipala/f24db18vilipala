// controllers/spice.js
var Spice = require('../models/spices'); 

// List of all Spices
exports.spice_list = async function(req, res) {
    try {
        let theSpices = await Spice.find();
        res.json(theSpices);
    } catch (err) {
        res.status(500).send({"error": `${err}`});
    }
};

// View all Spices
exports.spice_view_all_Page = async function(req, res) {
    try {
        const theSpices = await Spice.find(); // Retrieve all spices from the database
        res.render('spices', { title: 'Spice Search Results', results: theSpices });
    } catch (err) {
        res.status(500);
        res.send({"error": `${err}`});
    }
};

// Get details of a specific Spice
exports.spice_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Spice detail: ' + req.params.id);
};

// Handle Spice creation on POST
exports.spice_create_post = async function(req, res) {
    console.log(req.body);
    let document = new Spice();
    // Populate the Spice fields from the request body
    document.spice_name = req.body.spice_name;
    document.spice_origin = req.body.spice_origin;
    document.spice_cost = req.body.spice_cost;
    try {
        let result = await document.save();
        res.send(result); // Send back the saved spice document
    } catch (err) {
        res.status(500);
        res.send({"error": `${err}`});
    }
};

// Handle Spice delete on DELETE
exports.spice_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Spice delete DELETE ' + req.params.id);
};

// Handle Spice update on PUT
exports.spice_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: Spice update PUT ' + req.params.id);
};
