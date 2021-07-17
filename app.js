const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/studentDB",{useNewUrlParser:true ,useUnifiedTopology: true});

//create a schema

const studentSchema = new mongoose.Schema({
    name:{
        type: String,
        maxLength:10
    },

    age:{
        type: Number,
        min:18,
        max:60
    }
});

//create the model
const Student = new mongoose.model("student",studentSchema);

//create a student object

const student = new Student({
    name:"dinuka",
    age:20
});


student.save();