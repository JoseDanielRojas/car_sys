const mongoose = require("mongoose");

const factorySchema = mongoose.Schema({
    
    factoryName:{
        type:String,
        required: true
    },
    
    factoryAddress:{
        type:String,
        required: true
    },
    
    factoryContact:{
        type:String,
        required: true
    },   
    
    contactNumber:{
        type:Boolean,
        required: true
    },

    storageCapacityA:{
        type:Boolean,
        required: true
    },
    
    storageCapacityB:{
        type:Boolean,
        required: true
    },

    storageCapacityC:{
        type:Boolean,
        required: true
    },

});

module.exports = mongoose.model('Factory', factorySchema);