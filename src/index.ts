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
