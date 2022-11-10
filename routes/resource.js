var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var organisation_controller = require('../controllers/organisation'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// organisation ROUTES /// 
 
// POST request for creating a organisation.  
router.post('/organisation', organisation_controller.organisation_create_post); 
 
// DELETE request to delete organisation. 
router.delete('/organisation/:id', organisation_controller.organisation_delete); 
 
// PUT request to update organisation. 
router.put('/organisation/:id', organisation_controller.organisation_update_put); 
 
// GET request for one organisation. 
router.get('/organisation/:id', organisation_controller.organisation_detail); 
 
// GET request for list of all organisation items. 
router.get('/organisation', organisation_controller.organisation_list); 
 
module.exports = router; 