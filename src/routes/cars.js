const express = require("express");
const router = express.Router();
const carSchema = require ("../models/cars")

router.post("/car",(req,res) => {
    const car = carSchema(req.body);

    car.save()
        .then(
            data => res.json(data))
        .catch(
            error => res.json(error)
        );

});

module.exports = router;
