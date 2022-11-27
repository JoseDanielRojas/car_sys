const mongoose = require("mongoose");

const carSchema = mongoose.Schema({
    
    carType:{
        type:String,
        required: true
    },
   
    transmition:{
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
    carType:{
        type:String,
        required: true
    },
    
    
    electricWindow:{
        type:String,
        required: true
    },

    electricMirrors:{
        type:String,
        required: true
    },
    
    rearProximitySensor:{
        type:String,
        required: true
    },

    frontProximitySensor:{
        type:String,
        required: true
    },
    
    reverseCamera:{
        type:String,
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