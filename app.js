const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitDB",{useNewUrlParser:true ,useUnifiedTopology: true});

//create a schema

const studentSchema =  new mongoose.Schema({
    name: {
        type: String,
        required:[true,"name should be specified!"]
    },

    age:{
        type: String,
        min:10

    },

    favouriteFruit: fruitSchema
});

//create a model

const Student = new mongoose.model("Student",studentSchema);

//------------------------------------------------------------------------------------


//create a schema

const fruitSchema = new mongoose.Schema({
    name:{
        type: String,
        required :[true,"name is not specified!"]
    },

    rating: {
        type: String,
        max:10,
        min:0
    }
});


//create a model

const Fruit = new mongoose.model("Fruit",fruitSchema);



// create a fruit object

const fruit = new Fruit({
    name:"apple",
    rating:8
})

fruit.save();





















