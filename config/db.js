const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb://' +
      process.env.DB_USER_PASS +
      '/BACK_PROJECT_1'
  )
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Failed to connect to MongoDB', err));

