// require('dotenv').config({path :'./env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js"
import express from "express"


dotenv.config({
  path: './.env'
})

connectDB()
.then(()=>{
    app.on("error",(error)=>{
       console.log("Errr:",error)
       throw error
    })
    
    app.listen(process.env.PORT||8000,()=>{
        console.log(`server is running at port: ${process.env.PORT}`)
    })
})
.catch((error)=>{
  console.log(`MOngoDb connection failed !!!`,error);
})











// direct database connect without write code in another file

/*import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";

import express from "express";
const app = express()



;( async () => {
    try{
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
       app.on("error", (error) =>{
         console.log("ERROR :", error);
         throw error
       })

       app.listen(process.env.PORT,()=>{
        console.log(`App is listning on port ${process.env.PORT}`)
       })
    }catch(error){
        console.error("ERROR", error)
        throw error
    }
})()
*/