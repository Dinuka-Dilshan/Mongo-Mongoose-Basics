const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/studentDB",{useNewUrlParser:true ,useUnifiedTopology: true});

//create a schema

const studentSchema = new mongoose.Schema({
    name:{
        type: String,
        maxLength:10,
        required:[true,"name is not specified!"]
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
    name:"dilshan",
    age:20
});

//close the connection if saved successfully
student.save((error,result)=>{
    if(result){
        mongoose.connection.close();
    }
});

//update details
Student.updateOne({ name:"dilshan"},{name:"kamal"},(error,result)=>{
    if(error){
        console.log(error);
    }else{
        console.log("Successfull!");
    };
});

Student.deleteOne({name:"kamal"},(error,result)=>{
    if(error){
        console.log(error)
    }else{
        mongoose.connection.close();
        console.log("deleted!");
    }
});