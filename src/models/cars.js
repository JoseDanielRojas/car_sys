const mongoose = require("mongoose");

const carSchema = mongoose.Schema({
    
    _id:{
        type:mongoose.ObjectId,
        required: true
    },
    name:{
        type:String,
        required: true
    },
    carType:{
        type:String,
        required: true
    },

    transmissionWheels:{
        type:String,
        required: true
    },
    seatMaterial:{
        type:String,
        required: true
    },
    
    motor:{
        type:String,
        required: true
    },   
    
    electricWindow:{
        type:Boolean,
        required: true
    },

    electricMirrors:{
        type:Boolean,
        required: true
    },
    
    rearProximitySensor:{
        type:Boolean,
        required: true
    },

    frontProximitySensor:{
        type:Boolean,
        required: true
    },
    
    sideProximitySensor:{
        type:Boolean,
        required: true
    },
    reverseCamera:{
        type:Boolean,
        required: true
    },
    controlPanel:{
        type:String,
        required: true
    },
    
    transmission:{
        type:String,
        required: true
    },
    
    carUpholstery:{
        type:String,
        required: true
    },
    
    soundSystem:{
        type:String,
        required: true
    },
});

module.exports = mongoose.model('Car', carSchema);