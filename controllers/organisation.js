var organisation = require('../models/organisation'); 
 
// List of all Costumes 
exports.organisation_list = async function(req, res) { 
    try{ 
        theorganisation = await organisation.find(); 
        res.send(theorganisation); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// for a specific Costume. 
exports.organisation_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: organisation detail: ' + req.params.id); 
}; 
 
// Handle organisation create on POST. 
exports.organisation_create_post = // Handle organisation create on POST. 
exports.organisation_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new organisation(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"organisation_type":"goat", "cost":12, "size":"large"} 
    
  //  {"organisationName":"public","oraganisationMembers":100,"organisationChairman":"Anusha","location":"Hyderabad"}
    document.organisationName = req.body.organisationName;
    document.organisationMembers = req.body.organisationMembers;
    document.organisationChairman = req.body.organisationChairman;
    document.location = req.body.location; 
    document.cost = req.body.cost; 
    document.size = req.body.size; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

 
// Handle organisation delete form on DELETE. 
exports.organisation_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: organisation delete DELETE ' + req.params.id); 
}; 
 
// Handle organisation update form on PUT. 
exports.organisation_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: organisation update PUT' + req.params.id); 
}; 
// VIEWS 
// Handle a show all view 
exports.organisation_view_all_Page = async function(req, res) { 
    try{ 
        theorganisation = await organisation.find(); 
        res.render('organisation', { title: 'Organisation Search Results', results: theorganisation }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 