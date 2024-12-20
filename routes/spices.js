
var express = require('express');
var spice_controlers = require('../controllers/spices');
var router = express.Router();

const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    res.redirect("/login");
    }
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

router.get('/create', secured, spice_controlers.spice_create_Page);

/* GET update costume page */
router.get('/update', secured, spice_controlers.spice_update_Page);

/* GET delete costume page */
router.get('/delete', secured, spice_controlers.spice_delete_Page);


module.exports = router;