const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId, //user id
    required: true,
    ref: 'User',
  },
  receiver: {
    type: mongoose.Schema.Types.ObjectId, //user id
    required: true,
    ref: 'User',
  },
  amount: {
    type: Number,
    required: true,
    min: 0,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'failed'],
    default: 'completed',
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Transaction', transactionSchema);
