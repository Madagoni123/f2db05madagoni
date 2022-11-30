var express = require('express'); 
const organisation_controlers= require('../controllers/organisation'); 
var router = express.Router(); 
// A little function to check if we have an authorized user and continue on 

// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
 
/* GET costumes */ 
router.get('/',secured , organisation_controlers.organisation_view_all_Page ); 
module.exports = router; 

/* GET detail organisation page */ 
router.get('/detail', secured ,organisation_controlers.organisation_view_one_Page); 

/* GET create organisation page */ 
router.get('/create',secured , organisation_controlers.organisation_create_Page); 

/* GET create update page */ 
router.get('/update',secured , organisation_controlers.organisation_update_Page); 

/* GET delete organisation page */ 
router.get('/delete',secured , organisation_controlers.organisation_delete_Page); 
 
 