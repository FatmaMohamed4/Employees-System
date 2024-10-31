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
