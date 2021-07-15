const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/personDB",{useNewUrlParser:true ,useUnifiedTopology: true});

//create the schema
const personSchema = new mongoose.Schema({
    name:String,
    age : Number,
    address : String
});

//create model
const Person = mongoose.model("Person",personSchema);

//create a person object
const person = new Person({
    name:"dinuka",
    age:22,
    address: "Lion house"
});

//save person to the database
person.save();