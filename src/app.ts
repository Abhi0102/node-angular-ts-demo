import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import userRoute from './routes/user.route';
import { loadConfig } from './config/azureConfig';
import logger from 'config/logger';

dotenv.config();

loadConfig().catch((error) => logger.log(error));
const app = express();
app.disable('x-powered-by');

app.use('/api', userRoute);

app.use(express.static(path.resolve(__dirname, '..', 'client', 'dist', 'client')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'client', 'dist', 'client', 'index.html'));
});
export default app;
