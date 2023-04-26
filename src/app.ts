import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config();

const app = express();
app.disable('x-powered-by');

app.use(express.static(path.resolve(__dirname, '..', 'client', 'dist', 'client')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'client', 'dist', 'client', 'index.html'));
});
export default app;
