const mongoose = require("mongoose") 
const organisationSchema = mongoose.Schema({ 
 organisation_type: String, 
 organisationName: String, 
 oraganisationMembers: Number,
 organisationChairman:String,
 location:String
}) 
 
module.exports = mongoose.model("organisation", organisationSchema)
 