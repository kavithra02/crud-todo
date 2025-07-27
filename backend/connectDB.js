const mongoose=require("mongoose");
require("dotenv").config();

const connectToDb =async()=>{
    try{
        console.log(process.env.DB_CONNECTION_STRING);
        const connect=await mongoose.connect(process.env.DB_CONNECTION_STRING);
        console.log(`Databse connected: ${connect.connection.name}`);
    }catch(error){
        console.error(`DB connection failed: ${error}`);
    }
};

module.exports=connectToDb;