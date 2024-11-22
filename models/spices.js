const mongoose = require("mongoose");

const spiceSchema = mongoose.Schema({
  // spices_name: String,
  // origin: String,
  // price: Number

  spice_name: {
    type: String,
    required: true,
    maxLength: 20,
    minLength: 1
  },
  spice_origin: {
    type: String,
    required: true,
    maxLength: 30,
    minLength: 1
  },
  spice_cost: {
    type: Number,
    maxLength: 1000,
    minLength: 1
  }
})

module.exports = mongoose.model("Spice",
    spiceSchema)


