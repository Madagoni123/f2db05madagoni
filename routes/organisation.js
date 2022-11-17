var express = require('express'); 
const organisation_controlers= require('../controllers/organisation'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.get('/', organisation_controlers.organisation_view_all_Page ); 
module.exports = router; 

/* GET detail organisation page */ 
router.get('/detail', organisation_controlers.organisation_view_one_Page); 

/* GET create organisation page */ 
router.get('/create', organisation_controlers.organisation_create_Page); 

/* GET create update page */ 
router.get('/update', organisation_controlers.organisation_update_Page); 

/* GET delete organisation page */ 
router.get('/delete', organisation_controlers.organisation_delete_Page); 
 
 