import mongoose from 'mongoose';
import { MONGO_URI, PORT } from './config';
import { app } from './app';

mongoose.connect(MONGO_URI)
  .then(resp => {
    console.log('----------------------------------------------');
    console.log('| MongoDB Connected:                         |');
    console.log(`| ${resp.connection.host} |`);
    console.log('----------------------------------------------');

    app.listen(PORT, () => {
      console.log('----------------------------------------------');
      console.log(`| Server running on port ${PORT}                |`);
      console.log('----------------------------------------------');
    });
  })
  .catch(err => {
    console.log('Error connecting to the database', err);
  });
