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
        const theSpices = await Spice.find(); 
        res.render('spices', { title: 'Spice Search Results', results: theSpices });
    } catch (err) {
        res.status(500);
        res.send({"error": `${err}`});
    }
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



   // Get details of a specific Spice
   exports.spice_detail = async function(req, res) {
    console.log("detail" + req.params.id); // Log the ID to verify
    try {
        // Use findById to fetch the spice by ID from the database
        let result = await Spice.findById(req.params.id);
        res.send(result); // Send the spice details as JSON
    } catch (error) {
        res.status(500); // Send an error status if not found
        res.send(`{"error": "Document for id ${req.params.id} not found"}`);
    }
};
//     res.send('NOT IMPLEMENTED: Spice detail: ' + req.params.id);
// };

// Handle Spice delete on DELETE
exports.spice_delete = async function(req, res) {
    console.log("delete" + req.params.id)
    try{
        result = await Spice.findByIdAndDelete(req.params.id)
        console.log("Removed" + result)
        res.send(result)
    }catch (err){
        res.status(500)
        res.send(`{"error":Error deleting ${err}}`);
    }
};



// Handle Spice update on PUT
exports.spice_update_put = async function(req, res) {
    console.log(`update on id${req.params.id}with body ${JSON.stringify(req.body)}`)
    try{
        let toUpdate =await Spice.findById(req.params.id)
        //Do updates of properties
        if(req.body.spice_type)
            toUpdate.spice_type=req.body.spice_type;
            if(req.body.spice_name) toUpdate.spice_name = req.body.spice_name;
            if(req.body.spice_origin) toUpdate.spice_origin = req.body.spice_origin;
            if(req.body.spice_cost) toUpdate.spice_cost = req.body.spice_cost;
            let result = await toUpdate.save();
            res.send(result)    
    } catch(err){
        res.status(500)
        res.send(`{"error":${err}: Update for id ${req.params.id}failed`);
    }
    };

    
// Handle a show one view with id specified by query
exports.spice_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id); // Log the ID to debug
    try {
        let result = await Spice.findById(req.query.id); // Find the spice by ID
        if (result) {
            res.render('spicedetail', { title: 'spice Detail', toShow: result });
        } else {
            res.status(404).send(`{'error': 'spice not found'}`);
        }
    } catch (err) {
        res.status(500).send(`{'error': '${err}'}`);
    }
};


// Handle building the view for creating a spice.
// No body, no in-path parameter, no query.
// Does not need to be async
exports.spice_create_Page = function (req, res) {
    console.log("create view");
    try {
        res.render('spicecreate', { title: 'spice Create' });
    } catch (err) {
        res.status(500).send(`{'error': '${err}'}`);
    }
};


// Handle building the view for updating a spice.
// Query provides the id

exports.spice_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id);
    try {
        let result = await Spice.findById(req.query.id);
        res.render('spiceupdate', { title: 'spice Update', toShow: result });
    } catch (err) {
        res.status(500).send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query
exports.spice_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await Spice.findById(req.query.id)
    res.render('spicedelete', { title: 'Spice Delete', toShow:
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
 