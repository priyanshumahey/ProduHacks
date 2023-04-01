import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 1900;

app.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});