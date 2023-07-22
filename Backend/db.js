const mongoose = require('mongoose');
const mongoURI ="mongodb://127.0.0.1:27017/test";

const connectToMongo = () =>{
    //deprectaion warning
    mongoose.set('strictQuery', true);

    //connection to the mongodb
    mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log('Connected to MongoDB successfully!');
      })
      .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
      });
}



module.exports = connectToMongo;