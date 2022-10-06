const mongoose = require('mongoose');

mongoose
  .connect(
    "mongodb+srv://mahdou:Mahdou123@deploydatabase.veip9ur.mongodb.net/BACK_PROJECT"
  )
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Failed to connect to MongoDB', err));

