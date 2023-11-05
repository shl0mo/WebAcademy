import express, { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import validateEnv from './utils/validateEnv';
import { router } from './router/router';

dotenv.config();
validateEnv();

const app = express();
const PORT = process.env.PORT ?? 3333;

app.use(morgan('combined'));
app.use(express.json());
app.use(router);


app.listen(PORT, () => {
	console.log(`Express app iniciada na porta ${PORT}.`)
})
