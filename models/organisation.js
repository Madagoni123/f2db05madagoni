const mongoose = require("mongoose") 
const organisationSchema = mongoose.Schema({ 

organisationName: {
    type:String, 
    required:true
 },
oraganisationMembers:{
    type: Number,
    required:true,
    min:1,
    max:2000
 },
organisationChairman:{
    type:String, 
    required:true,
 },
location:{
    type:String, 
    required:true,
 },
}) 
 
module.exports = mongoose.model("organisation", organisationSchema)
 