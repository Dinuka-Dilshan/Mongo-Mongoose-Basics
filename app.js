const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/personDB",{useNewUrlParser:true});

//create the schema
const personSchema = new mongoose.Schema({
    name:String,
    age : Number,
    address : String
});

//create model

