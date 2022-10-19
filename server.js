const express = require('express');
const colors = require('colors');
const { urlencoded } = require('express');
const env = require('dotenv').config();
const userRoute = require('./routes/user');


//port init
const PORT = process.env.PORT || 5050

//express init
const app = express();

//router
app.use('/api/v1/user', userRoute);


//express middileware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//listen port
app.listen(PORT, () => {
    console.log(`your server is running on ${PORT}`.bgYellow.black);
});