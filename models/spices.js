// const mongoose = require("mongoose");

// const spiceSchema = mongoose.Schema({
//   // spices_name: String,
//   // origin: String,
//   // price: Number

//   spice_name: {
//     type: String,
//     required: true,
//     maxLength: 20,
//     minLength: 1
//   },
//   spice_origin: {
//     type: String,
//     required: true,
//     maxLength: 30,
//     minLength: 1
//   },
//   spice_cost: {
//     type: Number,
//     maxLength: 1000,
//     minLength: 1
//   }
// })

// module.exports = mongoose.model("Spice",
//     spiceSchema)


const mongoose = require("mongoose");
 
const spiceSchema = mongoose.Schema({
  spice_name: {
    type: String,
    required: [true, "Spice name is required"],
    maxLength: [20, "Spice name must be less than or equal to 20 characters"],
    minLength: [1, "Spice name must have at least 1 character"]
  },
  spice_origin: {
    type: String,
    required: [true, "Spice origin is required"],
    maxLength: [30, "Spice origin must be less than or equal to 30 characters"],
    minLength: [1, "Spice origin must have at least 1 character"]
  },
  spice_cost: {
    type: Number,
    required: [true, "Spice cost is required"],
    min: [10, "Spice cost must be at least 1"],
    max: [1000, "Spice cost must be less than or equal to 1000"]
  }
});
 
module.exports = mongoose.model("Spice", spiceSchema);