const mongoose = require('mongoose');

// Creating review schema

const reviewSchema = new mongoose.Schema({
        user_id: {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Users"
        },
        movie_id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Movie"
        },
        upvote:{
            type:Number,
            default:0

        },
        content: String,
        downvote:{
            type:Number,
            default:0
        },
        votes:[{
            type: String,
            user_id: {
                type:mongoose.Schema.Types.ObjectId,
                ref:"Users"
            }  
        }]

        
});

module.exports = mongoose.model("Review", reviewSchema);