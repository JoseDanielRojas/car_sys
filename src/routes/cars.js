const express = require("express");
const router = express.Router();
const carSchema = require ("../models/cars");
const factory = require("../models/factory");
const factorySchema = require("../models/factory")

router.post("/car",(req,res) => {
    const car = carSchema(req.body);

    car.save()
        .then(
            data => res.json(data))
        .catch(
            error => res.json(error)
        );

});

router.post("/factory",(req,res) => {
    const car = factorySchemaSchema(req.body);

    factory.save()
        .then(
            data => res.json(data))
        .catch(
            error => res.json(error)
        );

});
module.exports = router;
