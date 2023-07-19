const mongoose = require('mongoose');
const mongoURI ="mongodb://localhost:27017";

const connectToMongo = () =>{
    //deprectaion warning
    mongoose.set('strictQuery', true);

    //connection to the mongodb
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to mongo Mahesh");
    });
}

module.exports = connectToMongo;