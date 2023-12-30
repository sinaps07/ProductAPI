const mongoose=require("mongoose");
const dotenv = require('dotenv');
dotenv.config();
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("connection is succesful");
}).catch((err)=>{
console.log("No connection");
})