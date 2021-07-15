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

//creating the schema
const fruitSchema = new mongoose.Schema({
    name:String,
    rating:Number
});

//creating the model
const Fruit = mongoose.model("Fruit",fruitSchema);

//creating objects
const mango = new Fruit({
    name:"mango",
    rating:10
});

const apple = new Fruit({
    name: "apple",
    rating: 6
});

const orange = new Fruit({
    name:"orange",
    rating:9
});

Fruit.insertMany([mango,apple,orange],(error,result)=>{
    if(error){
        console.log(error);
    }else{
        console.log("Successfull!");
    }
});

/*All callbacks in Mongoose use the pattern callback(error, result).
 If an error occurs executing the query, the error parameter will contain an error document and result will be null. 
 If the query is successful, the error parameter will be null, and the result will be populated with the results of the query.*/

 //search 
 const fruits = Fruit.find((error,result)=>{
    if(error){
        console.log(error);
    }else{
        //close the connection
        mongoose.connection.close();
        result.forEach((fruit) => {
            console.log(fruit.name);
        });
    }
})
