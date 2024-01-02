const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DataSchema = new Schema({
  itemId: String,
  title: String,
  responses: [{
    question: String,
    answer: String
  }]
});

module.exports = mongoose.model('Data', DataSchema);
