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

