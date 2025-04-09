import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

// Middleware to handle CORS and JSON parsing
// Note: In a real-world application, you should not hardcode the CORS origin in your code.

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
  })
);

app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(express.static('public'));
app.use(cookieParser());

//Routes import

import userRouter from './routes/user.routes.js';

// Routes Declaration
app.use('/api/v1/users', userRouter);

export { app };
