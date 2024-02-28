const mongoose = require('mongoose');
const ManagerSchema = new mongoose.Schema({
    name: { 
        type: String,
        minlength: [2, 'Name must be at least 3 characters long']
          },
    position:{
      type: String,
    },
  games: [{
      type: {
          type: Number,
          enum: [1, 2, 3]
      },
      status: {
          type: String,
          enum: ['Playing', 'Not Playing', 'Undecided'],
          default: 'Undecided'
      }
  }]
}, { timestamps: true });
module.exports = mongoose.model('Manager', ManagerSchema);