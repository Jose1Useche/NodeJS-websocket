import { connect } from 'mongoose';
import { config } from "dotenv";

config({ path: "./config/.env" })

let uri = 
          'mongodb://127.0.0.1:27017/bookstore';
        // process.env.MONGODB_CONNECT;

//connect to DB
export const connectDB = async () => {
    try {
        await connect(uri);
        return 'Connected to DB';
    } catch (error) {
        throw new Error(error.message);
    }
};