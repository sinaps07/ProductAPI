const express=require("express");
require("../src/db/conn");
const Product=require("../src/models/product");

const app=express();
const port=process.env.PORT || 8000;

app.use(express.json());
app.post("/products",async(req,res)=>{
    console.log(req.body);
    
    try
        {
            const user=new Product(req.body);
             insertuser=await user.save();
            res.status(201).send(insertuser);
        }catch(e)
        {
            res.status(400).send(e);
        };
})
app.get("/products",async(req,res)=>
{
    try{
        const productsdata=await Product.find({});
        res.send(productsdata);
    }
    catch(e)
    {
        res.send(e);
    }
})
app.delete("/products/:id",async(req,res)=>
{
    try {
        const delstud=await Product.findByIdAndDelete(req.params.id);
        if(!req.params.id)
        {
            return res.status(400).send();
        }
        res.send(delstud);
    } catch (error) {
        res.status(500).send(e);
    }
})
app.patch("/products/:id",async (req,res)=>
{
    try {
        const _id=req.params.id;
        const prodata=await Product.findByIdAndUpdate(_id,req.body,
            {
                new:true
            });
            res.send(prodata);
    } catch (error) {
        res.status(404).send(e);
    }
})
app.listen(port,()=>
{
    console.log(`server is running at PORT ${port} `);
})


