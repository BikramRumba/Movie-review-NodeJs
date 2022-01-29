const mongoose = require('mongoose');

// creating movie schema
const movieSchema = new mongoose.Schema({
     title:{
         type:String,
         required: true,
         min:3,
         max:100
     },
     genre: [{
         type:String,
         required:true,

     }],
     year:{
         type:String,
         required:true,
         min:4
     },
     director:{
         type:String,
         required:true, 
         min:4
     }
});

module.exports = mongoose.model("Movies", movieSchema);