<<<<<<< HEAD
import mongoose from "mongoose";
import dotenv from "dotenv" ;

dotenv.config()
const MongoURL =process.env.DBUrl;

if (!MongoURL) {
    console.log("DBUrl is not defined in the environment variables");
}

export const dbConnection = mongoose.connect(MongoURL as string, {
    dbName: 'TS-1',
}).then(() => {
    console.log('DB is connected');
}).catch((error) => {
    console.error('DB connection error:', error);
});

=======
import mongoose from "mongoose";
import { DBUrl } from "../variables";


const MongoURL =  DBUrl

if (!MongoURL) {
    console.log("DBUrl is not defined in the environment variables");
}

export const dbConnection = mongoose.connect(MongoURL, {
    dbName: 'TS-1',
}).then(() => {
    console.log('DB is connected');
}).catch((error) => {
    console.error('DB connection error:', error);
});

>>>>>>> a2359e5af1c41dbb776f9172a7c82841eee40418
