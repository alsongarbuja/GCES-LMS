const mongoose = require('mongoose');
 
const limitSchema = new mongoose.Schema({
    quantity:{
        type:Number,
        required:true,
    },
    categories:{
        type:[mongoose.SchemaTypes.ObjectId]
    },
    sub_quantity:[{
        quantity:{
            type:Number,
            required:true,
        },
        type:{
            type:String,
            enum:['reference', 'text-book'],
            required:true,
        }
    }]
},
{
    timestamps: true,
})

module.exports = mongoose.model('Limit', limitSchema);