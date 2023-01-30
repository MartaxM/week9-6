const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let TodoSchema = new Schema({
   user:{type: mongoose.ObjectId},
   items: [String]
});

module.exports = mongoose.model("todos", TodoSchema);
