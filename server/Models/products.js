const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true , "product name must be provided"],
     
    },
    price : {
        type : Number ,
        required : [true , "price product must be provided"]
    },
    featured:{
        type:Boolean,
        required:true,
     
    },
     rating:{
        type:Number,
        default:4.5,
     
    },
    company : {
        type : String ,
        enum : {
          values :    ['brand1' , 'brand2' , 'brand3' , 'brand4'] ,
          message :' {VALUE} is not supported ',
        } 
    }
  
},
{timestamps : true}
);

//Export the model
module.exports = mongoose.model('Product', productSchema);