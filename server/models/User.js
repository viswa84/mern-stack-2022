const { default: mongoose, Schema } = require("mongoose");

const userSchema = new Schema({
  firstName: { type: String, required: ["First name field is required"] },
  lastName: { type: String, required: ["Last name field is required"] },
  email: { type: String },
  required: ["Email  field is required"],
  password: { type: String, required: ["Password field is required"] },

},{timestamps:true});

const usermodel = new mongoose.model("User", userSchema);
module.exports = usermodel;
