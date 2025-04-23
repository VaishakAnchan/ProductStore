import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()
const MongoDB = process.env.MongoDB_URI;


export const connectDB = async()=>{
    try {
       const DB = await mongoose.connect(MongoDB);
       console.log(`MongoDb Connected: ${DB.connection.host}`)
    } catch (error) {
        console.error(`Error : ${error.message}`);
        process.exit(1); //1 means exit with failure
    }
}
