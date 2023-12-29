const mongoose =require("mongoose");
const validator=require("validator");

const productSchema=new mongoose.Schema({
     ProductName:{
        type:String,
        required:true,
        minlength:8
    },
    name:{
        type:String,
        required:true,
        minlength:5,
    },
    email:{
        type:String,
        required:true,
        unique:[true,"email id is already present"],
        validate(value)
        {
            if(!validator.isEmail(value))
            {
                throw new Error("Invalid email");
            }
        }},
        phone:{
            type:Number,
            min:10,
            required:true,
            unique:true
        },
        address:{
            type:String,
            required:true
        }
})
//creating new collections
const Product=new mongoose.model('Product',productSchema);
module.exports=Product;