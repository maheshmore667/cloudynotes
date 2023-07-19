const mongoose = require('mongoose');

const NotesSchema = new Schema({
   title : {
    type : String,
    required : true
   },
   description : {
    type : String,
    required : true
   },
   tag: {
    type : String,
    default : "General"
   },
   date : {
    type : Date.now
   },
   author : {
    type : String,
    required : true
   }
  });

  module.exports = mongoose.model('notes', NotesSchema);