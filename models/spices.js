const mongoose = require("mongoose");

const spiceSchema = mongoose.Schema({
  // spices_name: String,
  // origin: String,
  // price: Number

  spice_name: {
    type: String,
    required: true
  },
  spice_origin: {
    type: String,
    required: true
  },
  spice_cost: {
    type: Number
  }
})

module.exports = mongoose.model("Spice",
    spiceSchema)


