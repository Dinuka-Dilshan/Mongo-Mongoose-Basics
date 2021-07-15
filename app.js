const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/personDB",{useNewUrlParser:true});

//create the schema
const personSchema = mongoose.Schema("Person",{
    name:String,
    age : Number,
    address : String
})