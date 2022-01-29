const express = require('express');
const app = express();


// Importing routes
const userRoute = require('./routes/user');



// Route Middlewares
app.use('/users', userRoute);


// Listening to port

app.listen(3000, 
    ()=> console.log("Server Up and Listening"));
