const mongoose = require("mongoose");

const carSchema = mongoose.Schema({
    
    carType:{
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
        type:boolean,
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