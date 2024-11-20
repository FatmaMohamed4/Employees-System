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

