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
 
//Handle organisation update form on PUT. 
exports.organisation_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await organisation.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.organisationName) toUpdate.organisationName = req.body.organisationName; 
        if(req.body.oraganisationMembers) toUpdate.oraganisationMembers = req.body.oraganisationMembers; 
        if(req.body.organisationChairman) toUpdate.organisationChairman = req.body.organisationChairman;
        if(req.body.location) toUpdate.location = req.body.location;  
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
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
// for a specific organisation. 
exports.organisation_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await organisation.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 

// Handle organisation delete on DELETE. 
exports.organisation_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await organisation.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 

 // Handle a show one view with id specified by query 
 exports.organisation_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await organisation.findById( req.query.id) 
        res.render('organisationdetail',  
{ title: 'organisation Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for creating a organisation. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.organisation_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('organisationcreate', { title: 'organisation Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for updating a organisation. 
// query provides the id 
exports.organisation_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await organisation.findById(req.query.id) 
        res.render('organisationupdate', { title: 'organisation Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};


// Handle a delete one view with id from query 
exports.organisation_delete_Page = async function(req, res) { 
    console.log("delete view for id "  + req.query.id) 
    try{ 
        result = await organisation.findById(req.query.id) 
        res.render('organisationdelete', { title: 'Organisation delete', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

 