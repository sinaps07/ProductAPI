const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/Product-api").then(()=>{
    console.log("connection is succesful");
}).catch((err)=>{
console.log("No connection");
})