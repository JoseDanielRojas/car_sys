const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const carRoutes = require("./routes/cars");

const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(cors())
app.use(express.json());
app.use('/api', carRoutes);


//routes
app.get ('/api',(req,res)=>{
    res.send("Welcome to the API")
});


//MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
.then(()=> console.log("Connected to MongoDB Atlas"))
.catch((error)=> console.error(error));


app.listen(port,() => console.log('sever listening on port', port));
