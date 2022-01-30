const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
// environment variable
dotenv.config();
// dotenv is the environment variable


// Importing routes
const userRoute = require('./routes/user');
const movieRoute = require('./routes/movies');

// importing middlewares to pass json file
app.use(express.json());


// Route Middlewares
app.use('/users', userRoute);
app.use('/movies', movieRoute);

// Connected to the Database
mongoose.connect(process.env.MONGO,
{ useNewUrlParser: true},
 () => console.log('Connected to the MOngoDB'));


// Listening to port

app.listen(3000, 
    ()=> console.log("Server Up and Listening"));


    