import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';

import morgan  from 'morgan';
import connectdb from './config/db.js';
import authRoute from './routes/authRoute.js';
import cors from 'cors';

dotenv.config()
//database
connectdb();

const app = express();
//middleware

app.use(cors({
    origin: 'http://localhost:3000', // Replace with your frontend origin
  }));
app.use(express.json())
app.use(morgan('dev'))

//route     /api/v1/auth/register
app.use('/api/v1/auth',authRoute);

app.get('/',(req,res)=>{
    res.send(
        "<h1>Welcome to ecommerence app</h1>"
    )
})
const PORT=process.env.PORT || 8080 ;

app.listen(PORT,()=>{
   
    console.log(`It is working`.bgCyan.white);
})