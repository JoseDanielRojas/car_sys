const express = require("express");
const router = express.Router();
const carSchema = require ("../models/cars");
const factory = require("../models/factory");
const factorySchema = require("../models/factory")
const mongoose = require('mongoose');

router.post("/car",(req,res) => {
    const car = carSchema(req.body);

    car.save()
        .then(
            data => res.json(data))
        .catch(
            error => res.json(error)
        );

});

router.get("/designs",(req,res)=> {
    const design = carSchema.find().then(data => res.json(data))
    return design;
});

router.get("/design",async (req,res)=> {
    //let carSchema = mongoose.model('Car')
    let _id = new mongoose.Types.ObjectId(req.query.id)
    //res.send(_id)
    //const design = carSchema.findById(_id).then(data => res.json(data))
    let find = await carSchema.findById(_id).exec();
        return find;
    //return design;
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
