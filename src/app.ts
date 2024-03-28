import express from 'express';
import { productsRouter, userController, priceRouter } from './router/';

export const app = express();

app.disable('x-powered-by');
app.use(express.json());
app.use(express.static('public'));

app.use('/products', productsRouter);
app.use('/users', userController);
app.use('/price', priceRouter);