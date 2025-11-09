import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { connectDatabase } from './config/database.js';
import paymentRoutes from './routes/paymentRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

dotenv.config();

const app = express();

const allowedOrigins = (process.env.CLIENT_ORIGIN || '').split(',').filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins.length ? allowedOrigins : '*',
  })
);
app.use(express.json());
app.use(morgan('dev'));

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
  });
});

app.use('/api/payments', paymentRoutes);
app.use('/api/orders', orderRoutes);

app.use((err, _req, res, _next) => {
  console.error('[server] Unexpected error', err);
  res.status(err.status || 500).json({
    message: err.message || 'Internal server error',
  });
});

const port = process.env.PORT || 4000;

const start = async () => {
  await connectDatabase();

  app.listen(port, () => {
    console.log(`[server] Listening on port ${port}`);
  });
};

start();
