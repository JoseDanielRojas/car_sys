const express = require("express");
const router = express.Router();
const carSchema = require ("../models/cars")

//create car
router.post("/car",(req,res) => {
    const car = carSchema(req.body);
    car.save().then((data) => res.json(data))
    .catch((error)=> res.json)({message:error});

});


module.exports = router;

