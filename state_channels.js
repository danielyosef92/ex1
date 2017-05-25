var mongoose = require('mongoose'),

schema = mongoose.Schema;
var state_channel = new schema({
        user: {type:String, required:true},
        chanells: {
            type :Array,
            items :{
                Name:{type:String},
                category:{type:String},
                number:{type:Number}
            }
        }}, {collection:'channel'});


//        [{Name:{type:String},category:{type:String},number:{type:Number}}]
    
    
module.exports = state_channel;