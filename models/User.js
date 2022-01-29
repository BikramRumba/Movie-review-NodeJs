const mongoose = require('mongoose');

// Creating User Schema
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        min:4,
        max:100
    },
    email:{
        type:String,
        required:true,
        min:6,
        max:255
    }
});





module.exports = mongoose.model("User", userSchema);