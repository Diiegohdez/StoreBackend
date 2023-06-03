const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name:{
        type: String
    },
    price:{
        type: Number
    },
    active:{
        type: String
    },
    description:{
        type: String
    },
    fecha:{
        type: String
    },
    _id:{
        type: Number
    },
    img:{
        type: String
    },
    platform:{
        type: String
    },
    quantity:{
        type: Number
    },
    tipo:{
        type: String
    },
    version:{
        type: String
    },

});

module.exports = mongoose.model('Products', productSchema);