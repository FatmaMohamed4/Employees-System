<<<<<<< HEAD
import  express from "express";
import { dbConnection } from "./database";
import { errorHandler } from "./Errors/errHandler";
import router from "./routes/Employee.Route";
import payrollRouter from "./routes/Payroll.Route";
import dotenv from "dotenv";

// Configure dotenv to load environment variables from a `.env` file
dotenv.config();

const app = express();
app.use(express.json());
dbConnection

app.use(express.urlencoded({ extended: true }))

const PORT = process.env.PORT
app.listen(5000,()=>{
    console.log(`App is ruuning on PORT ${PORT}`)
})



app.use('/employee', router)
app.use('/payroll',payrollRouter)
app.use(errorHandler);
=======
import  express from "express";


import bodyParser from "body-parser";



import { dbConnection } from "./database";
import { PORT } from "../variables";
import { errorHandler } from "./Errors/errHandler";
import router from "./routes/Employee.Route";


const app = express();
app.use(express.json()); // For parsing application/json
dbConnection
// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

app.listen(PORT ||5000,()=>{
    console.log(`App is ruuning on PORT ${PORT ||5000}`)
})



app.use('/employee', router)
app.use(errorHandler);
>>>>>>> a2359e5af1c41dbb776f9172a7c82841eee40418
