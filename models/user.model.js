const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
  
    name: {
      type: String,
      required: true,
    },
    class: {
      type: String,
      required: true,
    },
    school: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: false,
    },
   
    
  },
  { timestamps: true }
);

module.exports = mongoose.model('user', UserSchema);