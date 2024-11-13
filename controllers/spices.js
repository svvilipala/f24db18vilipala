// controllers/spice.js

var Spice = require('../models/spices');  

// List of all Spices
exports.spice_list = function(req, res) {
    Spice.find({}, function(err, spices) {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(spices);
    });
};

// Detail of a specific Spice
exports.spice_detail = function(req, res) {
    Spice.findById(req.params.id, function(err, spice) {
        if (err) {
            return res.status(500).send(err);
        }
        if (!spice) {
            return res.status(404).send('Spice not found');
        }
        res.json(spice);
    });
};

// Handle Spice creation on POST
exports.spice_create_post = function(req, res) {
    var spice = new Spice({
        name: req.body.name,
        origin: req.body.origin,
        cost: req.body.origin,
    });

    spice.save(function(err) {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(201).json(spice);
    });
};

// Handle Spice deletion on DELETE
exports.spice_delete = function(req, res) {
    Spice.findByIdAndDelete(req.params.id, function(err, spice) {
        if (err) {
            return res.status(500).send(err);
        }
        if (!spice) {
            return res.status(404).send('Spice not found');
        }
        res.status(204).send();
    });
};

// Handle Spice update on PUT
exports.spice_update_put = function(req, res) {
    Spice.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, spice) {
        if (err) {
            return res.status(500).send(err);
        }
        if (!spice) {
            return res.status(404).send('Spice not found');
        }
        res.json(spice);
    });
};
