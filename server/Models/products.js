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
        default:false,
     
    },
    company : {
        type : String ,
        enum : {
          values : ['ikea' , 'liddy' , 'caressa' , 'marcos'] ,
          message : '{VALUE} is not supported ',
        } 
    },
     rating:{
        type:Number,
        default:4.5,
     
    },
  
},
{timestamps : true}
);

//Export the model
module.exports = mongoose.model('Product', productSchema);