import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv'
import path from 'path';
import connectDb from './config/database';
import router from './routes';


const app = express();

app.use(express.json());

connectDb();

app.use('/api', router);

// Configure global variables
dotenv.config({path:  path.resolve(__dirname, './config/config.env')})

const PORT = process.env.PORT || 9000

app.listen(PORT, () => console.log(`App running in ${process.env.NODE_ENV} mode on PORT ${PORT}`))
