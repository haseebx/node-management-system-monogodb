const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  tel: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  details: {
    type: String,
  },
  createdAt: {
    type: Date,
    default:Date.now()
  },
  updatedAt: {
    type: Date,
    default:Date.now()
  },
});

module.exports = mongoose.model("Customer", CustomerSchema);
