require("dotenv").config();
const express = require('express');
const {connectToDB} = require("./config/dbconfig");
const productRoutes=require("./routes/products.route")
const authRoutes =require("./routes/auth.route")
const cartRoutes =require("./routes/cart.route")
const userRoutes =require("./routes/user.route")
const app = express();
const port = 4000;
app.use(express.json());
var cors = require('cors');
app.use(cors({origin: true, credentials: true}));
app.options("*",cors());
app.use("/products",productRoutes)
app.use("/auth",authRoutes)
app.use("/cart",cartRoutes)
app.use("/user",userRoutes)
const init = (async () =>{
    try{
        await connectToDB();
        app.listen(port,()=>{
                    console.log("Server started at port",port);
                })
    }
    catch(err){
        console.log(err);
    }
})()


